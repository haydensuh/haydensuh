import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DEFAULT_LOCALE = 'en'
// Temporary: disable auth gating for works pages (works list is open, works detail requires password)
const TEMP_DISABLE_AUTH = false

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const pathname = request.nextUrl.pathname

  // 1. 루트 접근 시 → 브라우저 언어에 따라 locale 리디렉션
  if (pathname === '/') {
    const acceptLang = request.headers.get('accept-language') || ''
    const matchedLocale = acceptLang.includes('ko') ? 'ko' : DEFAULT_LOCALE
    return NextResponse.redirect(new URL(`/${matchedLocale}`, request.url))
  }

  // 2. 로그인 페이지는 항상 통과
  if (pathname.includes('/login')) {
    return NextResponse.next()
  }

  // 3. 인증 필요한 /[locale]/works/* 경로만 차단 (works 메인 페이지는 제외)
  const isProtectedWorks = /^\/(en|ko)\/works\/.+$/.test(pathname)
  if (!TEMP_DISABLE_AUTH && isProtectedWorks && token !== 'valid') {
    const locale = pathname.startsWith('/ko') ? 'ko' : 'en'
    const loginUrl = new URL(`/${locale}/login`, request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
}
