export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml\n`
  return new Response(body, { headers: { 'content-type': 'text/plain' } })
}