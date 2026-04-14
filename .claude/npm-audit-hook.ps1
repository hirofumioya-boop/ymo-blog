[Console]::InputEncoding = [System.Text.Encoding]::UTF8
$raw = [Console]::In.ReadToEnd()
# Use simple string matching instead of JSON parsing to avoid encoding issues
if ($raw -like '*package.json*' -or $raw -like '*package-lock.json*') {
    Set-Location 'h:\マイドライブ\Claude Code\company\ymo-blog'
    npm audit --audit-level=high 2>&1
}
