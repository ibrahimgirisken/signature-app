import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cookie'den token'ı çekiyoruz
  const token = request.cookies.get('token')?.value;

  // Eğer token yoksa ve kullanıcı /admin ile başlayan bir yere gitmeye çalışıyorsa
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Tüm admin alt sayfalarını kapsar
};