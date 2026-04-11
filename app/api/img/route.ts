import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_HOSTS = ['m.media-amazon.com', 'images-na.ssl-images-amazon.com']

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {
    return new NextResponse('Missing url parameter', { status: 400 })
  }

  try {
    const parsed = new URL(url)
    if (!ALLOWED_HOSTS.includes(parsed.hostname)) {
      return new NextResponse('Host not allowed', { status: 403 })
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.amazon.fr/',
      },
    })

    if (!response.ok) {
      return new NextResponse(`Upstream error: ${response.status}`, { status: 502 })
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=604800, immutable',
      },
    })
  } catch {
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}
