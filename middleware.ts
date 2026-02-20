// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // ÖNEMLİ: Vercel değişkeni göremezse diye doğrudan API adresinizi yedek olarak buraya yazın
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.cw-dig.com/api";

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // fetch isteğinin tam URL'ini oluşturun
      const verifyRes = await fetch(`${API_URL}/Auth/verify-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
      });

      // Eğer API 404 veya 405 verirse (yanlış URL), burası hata fırlatır
      if (!verifyRes.ok) {
        throw new Error("API hatası");
      }

      const result = await verifyRes.json();

      if (result.state !== true) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
        return response;
      }
    } catch (error) {
      // API'ye ulaşılamazsa veya hata gelirse login'e at
      console.error("Middleware Auth Hatası:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};