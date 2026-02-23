import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && pathname.startsWith("/admin")) {
    try {
      // ÖNEMLİ: URL'in doğruluğunu loglayın
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/Auth/verify-token`;

      const apiRes = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
      });

      if (!apiRes.ok) {
        // API hata verirse login'e atma, hatayı gör (Geçici olarak)
        // return NextResponse.next();
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
        return response;
      }
    } catch (error) {
      // Sunucu loglarında bu hatayı görmeniz lazım
      console.error("Middleware API Hatası:", error);
      // Hata anında login'e atmak yerine devam etmesine izin verip test edin
      // return NextResponse.next();
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
