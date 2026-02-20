import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // If user is trying to access admin routes, enforce auth
  if (pathname.startsWith("/admin")) {
    const accept = request.headers.get("accept") || "";
    const isHtmlNav = accept.includes("text/html");

    // No token: if this is a full page navigation (HTML) redirect to login,
    // otherwise allow the request through (so RSC/prefetch/fetch won't get a 307).
    if (!token) {
      if (isHtmlNav) return NextResponse.redirect(new URL("/login", request.url));
      return NextResponse.next();
    }

    // Token exists: verify it with backend. If invalid, redirect only for HTML navigations,
    // otherwise allow the non-navigation request through so it can handle auth itself.
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        if (isHtmlNav) return NextResponse.redirect(new URL("/login", request.url));
        return NextResponse.next();
      }

      const apiRes = await fetch(`${apiUrl}/Auth/verify-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const result = await apiRes.json();

      if (!apiRes.ok || result.state === false) {
        if (isHtmlNav) {
          const response = NextResponse.redirect(new URL("/login", request.url));
          response.cookies.delete("token");
          return response;
        }
        return NextResponse.next();
      }
    } catch (error) {
      if (isHtmlNav) return NextResponse.redirect(new URL("/login", request.url));
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
