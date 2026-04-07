"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { InstagramPost } from "@/app/api/instagram/route";

const FALLBACK_IMAGES: InstagramPost[] = [
  {
    id: "f1",
    display_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/3be460b8-ced1-4e5d-b1b7-91af7a52d9a2/DSCF2919-HIGHRES-2.jpg",
    media_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/3be460b8-ced1-4e5d-b1b7-91af7a52d9a2/DSCF2919-HIGHRES-2.jpg",
    permalink: "https://www.instagram.com/tannedco_/",
    media_type: "IMAGE",
  },
  {
    id: "f2",
    display_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6e0af7d9-de31-4d94-a420-faafd0084f70/DSCF3334-HIGHRES-2.jpg",
    media_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6e0af7d9-de31-4d94-a420-faafd0084f70/DSCF3334-HIGHRES-2.jpg",
    permalink: "https://www.instagram.com/tannedco_/",
    media_type: "IMAGE",
  },
  {
    id: "f3",
    display_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg",
    media_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg",
    permalink: "https://www.instagram.com/tannedco_/",
    media_type: "IMAGE",
  },
  {
    id: "f4",
    display_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg",
    media_url: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg",
    permalink: "https://www.instagram.com/tannedco_/",
    media_type: "IMAGE",
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 9));
        } else {
          setPosts(FALLBACK_IMAGES);
        }
      })
      .catch(() => setPosts(FALLBACK_IMAGES))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-6">
      {loading ? (
        <div className="grid grid-cols-3 md:grid-cols-9 gap-1 px-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-[#e8d9c3] animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-9 gap-1 px-2">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={post.display_url}
                alt={post.caption ?? "Tanned Co. Instagram post"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {post.media_type === "VIDEO" ? (
                  <svg
                    className="w-7 h-7 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
