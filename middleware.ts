import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  const API_URL = process.env.API_URL;

  if (!API_URL) {
    console.error("API_URL TANIMSIZ");
  }

  if (token && pathname.startsWith("/admin")) {
    try {
      const apiRes = await fetch(
        `${API_URL}/Auth/verify-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: token }),
        },
      );

      console.log(`middleware:+${API_URL}`);

      const result = await apiRes.json();

      if (!apiRes.ok || result.state === false) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
        return response;
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: "/admin/:path*",
};
