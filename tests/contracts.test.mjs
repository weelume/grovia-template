import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
const root = new URL('../', import.meta.url)
test('双语路由、页面入口与市场元数据保持一致', async () => { const market = JSON.parse(await readFile(new URL('.tpl/template.json', root))); const meta = await readFile(new URL('src/features/site-templates/catalog/grovia/meta.ts', root), 'utf8'); assert.equal(market.surfaces[0].pages.length, 10); assert.equal(new Set(market.surfaces[0].pages.map(p => p.slug)).size, market.surfaces[0].pages.length); for (const page of market.surfaces[0].pages) { assert.ok(page.localizedTitles.en); assert.ok(meta.includes("slug: '" + page.slug + "'")) } })
test('独立运行源码不依赖消费方资源', async () => { async function walk(url) { for (const entry of await readdir(url, { withFileTypes: true })) { const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), url); if (entry.isDirectory()) await walk(file); else { const text = (await readFile(file, 'utf8')).replace(/https:\/\/github\.com\/weelume\/[a-z-]+/g, ''); assert.doesNotMatch(text, /weelume|微域生光|weiyu-logo|templates\/lunera|href="\/templates"/i) } } } await walk(new URL('src/', root)) })
