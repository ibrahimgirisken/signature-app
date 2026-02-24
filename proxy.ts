import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sadece fonksiyon ismini 'middleware' yerine 'proxy' yaptık
export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && pathname.startsWith("/admin")) {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/Auth/verify-token`;
      const apiRes = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
      });
      const result = await apiRes.json();
      
      if (!apiRes.ok || result.state === false) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
        return response;
      }
    } catch (error) {
      console.error("Proxy API Hatası:", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};