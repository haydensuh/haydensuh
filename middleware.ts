import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'ko']
const DEFAULT_LOCALE = 'en'

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

  // 3. 인증 필요한 /[locale]/works, /[locale]/works/* 경로 차단
  const isProtectedWorks = /^\/(en|ko)(\/works|\/works\/.*)$/.test(pathname)
  if (isProtectedWorks && token !== 'valid') {
    const locale = pathname.startsWith('/ko') ? 'ko' : 'en'
    const loginUrl = new URL(`/${locale}/login`, request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// 🔧 경로에서 locale 추출하는 유틸
function getLocaleFromPath(path: string) {
  const match = path.match(/^\/(en|ko)/)
  return match?.[1] || DEFAULT_LOCALE
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
}
