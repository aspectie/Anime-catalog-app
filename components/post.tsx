"use client";

import Link from "next/link";
import React, { useState } from "react";

export function Post({ post }: any) {
  const imgUrl = `https://shikimori.one/${post.image.original}`;
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="
        hover:text-amber-600
        hover:translate-y-2
        transition
        duration-100"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
    >
      <Link href={`/anime/${post.id}`} className="h-full block">
          <div className="relative">
              {isHovered &&
                  <div className="
                      w-full
                      h-full
                      absolute
                      bg-amber-600
                      opacity-30
                      rounded-md
                  "></div>
              }
              <img
                  src={imgUrl}
                  alt={post.name}
                  className="
                    w-full
                    h-fit
                    border
                    border-gray-800
                    rounded-md
              "/>
          </div>
        <span>{post.name}</span>
      </Link>
    </div>
  );
}
