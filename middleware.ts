import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { http } from './lib/http';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  try {
    const resValid=await http.post(`/Auth//verify-token`,{
      token:localStorage.getItem("token")
    });
    if(resValid.data.State)
    {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
      return NextResponse.redirect(new URL('/login', request.url));

  } catch (error) {
    
  }
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*', 
};