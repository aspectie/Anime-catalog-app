"use client";

import React, { useState } from "react";
import { Link } from "@/components/Link";

export function AnimePost({ post }: any) {
  const imgUrl = `https://shikimori.one/${post.image.original}`;
  const [isHovered, setHovered] = useState(false);
  const year = new Date(post.released_on);

  return (
    <div
      className="
      hover:text-amber-600
      hover:translate-y-2
      transition
      duration-100"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Link url={`/anime/${post.id}`} className="h-full block">
        <div className="relative">
          {isHovered && (
            <div
              className="
              w-full
              h-full
              absolute
              bg-amber-600
              opacity-30
              rounded-md
            "
            ></div>
          )}
          <span
            className="
            absolute
            bottom-0
            rounded-bl-md
            h-12
            w-16
            opacity-95
            bg-amber-400
            text-white
            text-2xl
            flex
            items-center
            justify-center
          "
          >
            {post.score}
          </span>
          <img
            src={imgUrl}
            alt={post.name}
            className="
              w-full
              h-fit
              border
              border-gray-800
              rounded-md
          "
          />
        </div>
        <p
          className="
          mt-2
          font-medium
        "
        >
          {post.name}
        </p>
        <p
          className="
          font-normal
        "
        >
          ({year.getFullYear()})
        </p>
      </Link>
    </div>
  );
}
