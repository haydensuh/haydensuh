import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { pass } = body

  if (pass === process.env.AUTH_PASS) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('auth_token', 'valid', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}
