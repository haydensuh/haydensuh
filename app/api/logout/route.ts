import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.redirect('/login')
  response.cookies.set('auth_token', '', {
    path: '/',
    maxAge: 0,
  })
  return response
}
