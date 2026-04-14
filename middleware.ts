import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with a lang segment
  const segments = pathname.split('/')
  const langSegment = segments[1]

  // Redirect invalid language codes to /fr
  if (langSegment && langSegment.length === 2 && !VALID_LANGS.includes(langSegment) && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    const url = request.nextUrl.clone()
    url.pathname = '/fr' + pathname.slice(3)
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://m.media-amazon.com https://images-na.ssl-images-amazon.com https://img.youtube.com; font-src 'self' data:; connect-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com; frame-ancestors 'none'"
  )

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|products/).*)'],
}
