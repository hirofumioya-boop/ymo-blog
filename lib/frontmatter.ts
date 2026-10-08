import yaml from 'js-yaml';

export interface FrontmatterResult<T = Record<string, unknown>> {
  data: T;
  content: string;
}

// `---` で囲まれたYAML frontmatterを切り出し、本文(content)と分離する。
// gray-matterのjs-yaml依存（safeLoad削除によりv4系で動作不能）を避けるための自前の薄い実装。
// 返り値の形は gray-matter の { data, content } に合わせ、呼び出し側の変更を最小化している。
const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function parseFrontmatter<T = Record<string, unknown>>(
  fileContents: string
): FrontmatterResult<T> {
  const match = FRONTMATTER_REGEX.exec(fileContents);

  if (!match) {
    return { data: {} as T, content: fileContents };
  }

  const [fullMatch, yamlBlock] = match;
  const parsed = yaml.load(yamlBlock);
  const data = (parsed ?? {}) as T;
  const content = fileContents.slice(fullMatch.length);

  return { data, content };
}
