'use client'

import React, { useState } from 'react'
import { Link } from '@components'
import { TAnimeItem } from '@/types/AnimeItem'

export function AnimePost({ id, score, name, image, released_on }: TAnimeItem) {
  const imgUrl = `https://shikimori.one/${image?.original}`
  const [isHovered, setHovered] = useState(false)
  const year = new Date(released_on)

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
      <Link
        url={`/anime/${id}`}
        className="h-full block"
      >
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
            {score}
          </span>
          <img
            src={imgUrl}
            alt={name}
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
          {name}
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
  )
}
