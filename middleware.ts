import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 1. Ortam değişkenini kontrol et ve yedekle
  // Vercel'de process.env kullanımı bazen hata verebilir, bu yüzden garantiye alıyoruz.
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // 2. Token yoksa ve admin sayfasına gidiliyorsa direkt yönlendir
  if (!token) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  // 3. Admin yolundaysak ve token varsa doğrula
  if (pathname.startsWith("/admin")) {
    // API_URL tanımlı değilse build/run anında hata almamak için kontrol
    if (!API_URL) {
      console.error("Middleware Error: NEXT_PUBLIC_API_URL is not defined in Vercel settings.");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const apiRes = await fetch(`${API_URL}/Auth/verify-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
        // İsteklerin çok uzun sürmemesi için timeout benzeri bir yapı
        signal: AbortSignal.timeout(5000), 
      });

      // Backend'den gelen yanıtı güvenli oku
      const result = await apiRes.json().catch(() => ({ state: false }));

      if (!apiRes.ok || result.state === false) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token"); // Geçersiz token'ı temizle
        return response;
      }
    } catch (error) {
      console.error("Middleware Auth Fetch Error:", error);
      // API kapalıysa veya bir ağ hatası varsa güvenli tarafta kalıp login'e atıyoruz
      const response = NextResponse.redirect(new URL("/login", request.url));
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};