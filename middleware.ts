import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('[middleware] running on:', request.nextUrl.pathname)

  const token = request.cookies.get('auth_token')?.value
  const pathname = request.nextUrl.pathname

  // 로그인 페이지는 예외 처리
  if (pathname.startsWith('/login')) {
    return NextResponse.next()
  }

  // 인증되지 않았고 /works 페이지 요청이면 /login으로 리디렉션
  if (pathname.startsWith('/works') && token !== 'valid') {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname) // 현재 경로 기억
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/works/:path*'],
}
