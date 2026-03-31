import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { Parser } from './budoux/parser.js';
import { model as jaModel } from './budoux/data/models/ja.js';

const budouxParser = new Parser(jaModel);

// HTMLタグを壊さずにテキストノードにだけBudouXを適用する
function applyBudouxToHtml(htmlString: string): string {
  return htmlString.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) return tag;
    if (text && text.trim()) {
      const chunks = budouxParser.parse(text);
      return chunks.length > 1 ? chunks.join('<wbr>') : text;
    }
    return text;
  });
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMeta {
  number: number;
  slug: string;
  title: string;
  date: string;
  status?: string;
  tags?: string[];
  readingTime: number;
  excerpt: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

function calculateReadingTime(content: string): number {
  // 日本語500文字/分
  const charCount = content.length;
  const minutes = Math.ceil(charCount / 500);
  return Math.max(1, minutes);
}

function extractExcerpt(content: string): string {
  // frontmatterを除いた本文の最初の段落を取得
  const lines = content.split('\n');
  const textLines: string[] = [];
  let inBlockquote = false;

  for (const line of lines) {
    if (line.startsWith('---')) continue;
    if (line.startsWith('#')) continue;
    if (line.startsWith('>')) {
      inBlockquote = true;
      continue;
    }
    if (inBlockquote && line.trim() === '') {
      inBlockquote = false;
      continue;
    }
    if (inBlockquote) continue;

    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('|') && !trimmed.startsWith('!')) {
      // マークダウン記法を除去
      const cleaned = trimmed
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/`(.*?)`/g, '$1')
        .replace(/\[(.*?)\]\(.*?\)/g, '$1');
      if (cleaned.length > 20) {
        textLines.push(cleaned);
      }
    }
    if (textLines.length >= 3) break;
  }

  const excerpt = textLines.join('　').slice(0, 120);
  return excerpt + (excerpt.length >= 120 ? '……' : '');
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        number: data.number as number,
        slug: data.slug as string,
        title: data.title as string,
        date: data.date as string,
        status: data.status as string | undefined,
        tags: data.tags as string[] | undefined,
        readingTime: calculateReadingTime(content),
        excerpt: extractExcerpt(content),
      };
    });

  return articles.sort((a, b) => a.number - b.number);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fileNames = fs.readdirSync(articlesDirectory);

  for (const fileName of fileNames) {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      const processedContent = await remark()
        .use(remarkGfm)
        .use(html, { sanitize: false })
        .process(content);
      const contentHtml = applyBudouxToHtml(processedContent.toString());

      return {
        number: data.number as number,
        slug: data.slug as string,
        title: data.title as string,
        date: data.date as string,
        status: data.status as string | undefined,
        tags: data.tags as string[] | undefined,
        readingTime: calculateReadingTime(content),
        excerpt: extractExcerpt(content),
        contentHtml,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data.slug as string;
    });
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
