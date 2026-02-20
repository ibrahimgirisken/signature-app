import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Sabit olarak doğrudan API URL'ini buraya da ekleyin (Test amaçlı)
  const BASE_API = process.env.NEXT_PUBLIC_API_URL || "https://api.cw-dig.com/api";
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    if (!token) return NextResponse.redirect(new URL("/login", request.url));

    try {
      // URL'in çift slash içermediğinden emin olun
      const cleanUrl = `${BASE_API}/Auth/verify-token`.replace(/([^:]\/)\/+/g, "$1");

      const apiRes = await fetch(cleanUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      // API yanıt vermezse veya JSON değilse hata fırlatır
      const result = await apiRes.json();

      if (!apiRes.ok || result.state === false) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
        return response;
      }
    } catch (error) {
      // Bir hata oluşursa (CORS, 405, 404 vb.) kullanıcıyı login'e atar
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}