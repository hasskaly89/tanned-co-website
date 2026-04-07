import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
  display_url: string;
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !igId) {
    return NextResponse.json(
      { error: "Instagram credentials not configured." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${igId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=9&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = await res.json();

    const posts: InstagramPost[] = (data.data as Omit<InstagramPost, "display_url">[])
      .map((p) => ({
        ...p,
        // Use thumbnail for videos, media_url for images/carousels
        display_url: p.media_type === "VIDEO" ? (p.thumbnail_url ?? p.media_url) : p.media_url,
      }))
      .slice(0, 9);

    return NextResponse.json({ posts });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
