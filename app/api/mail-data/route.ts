import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subdomain = searchParams.get("subdomain")?.trim();

    if (!subdomain) {
      return NextResponse.json(
        { status: "error", message: "subdomain is required" },
        { status: 400 }
      );
    }

    const upstreamUrl =
      `https://bayiler.cw-enerji.com/api/get_mail_sablon.php?subdomain=` +
      encodeURIComponent(subdomain);

    const upstreamRes = await fetch(upstreamUrl, {
      // dinamik içerikse cache kapatmak iyi olur
      cache: "no-store",
    });

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { status: "error", message: `Upstream HTTP ${upstreamRes.status}` },
        { status: 502 }
      );
    }

    const data = await upstreamRes.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: "Proxy failed" },
      { status: 500 }
    );
  }
}
