// Tells IndexNow (Bing, Yandex, Seznam, Naver) that every page in the live
// sitemap changed. Run after a deploy that changes content:
//   node scripts/indexnow.mjs
import { readdirSync } from 'node:fs'

const site = 'https://burak-altintas.com'
// The key is the name of the key file in public/ (also siteConfig.indexNowKey).
const keyFile = readdirSync(new URL('../public/', import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
if (!keyFile) throw new Error('No IndexNow key file in public/')
const key = keyFile.slice(0, -4)

const sitemapRes = await fetch(`${site}/sitemap.xml`)
if (!sitemapRes.ok) throw new Error(`Sitemap: ${sitemapRes.status}`)
const urlList = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (urlList.length === 0) throw new Error('Sitemap has no URLs')

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${keyFile}`, urlList }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`)
if (!res.ok) {
  console.error(await res.text())
  process.exitCode = 1
}
