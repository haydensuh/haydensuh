import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('[middleware] running on:', request.nextUrl.pathname)

  const token = request.cookies.get('auth_token')?.value
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/login')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/works') && token !== 'valid') {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/works/:path*'],
}
