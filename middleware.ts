import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // If user is trying to access admin routes, enforce auth
  if (pathname.startsWith("/admin")) {
    const accept = request.headers.get("accept") || "";
    // Allow non-navigation requests (RSC/fetch/prefetch) to pass through
    if (!accept.includes("text/html")) {
      return NextResponse.next();
    }
    // No token -> redirect to login immediately
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // If token exists, verify it with backend
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        // If API URL is not configured, deny access
        return NextResponse.redirect(new URL("/login", request.url));
      }

      const apiRes = await fetch(`${apiUrl}/Auth/verify-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

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
  matcher: ["/admin", "/admin/:path*"],
};
