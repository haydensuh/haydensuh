import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // 1. Basic Auth를 적용할 경로 필터링
  if (!url.pathname.startsWith('/works/')) {
    return NextResponse.next()
  }

  // 2. 브라우저의 Authorization 헤더 가져오기
  const authHeader = request.headers.get('authorization')

  if (!authHeader) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    })
  }

  // 3. 환경변수로부터 사용자 정보 가져오기
  const user = process.env.BASIC_AUTH_USER || ''
  const pass = process.env.BASIC_AUTH_PASS || ''
  const expectedAuth = 'Basic ' + btoa(`${user}:${pass}`)

  // 4. 인증 정보 일치 여부 확인
  if (authHeader !== expectedAuth) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/works/:slug*'],
}
