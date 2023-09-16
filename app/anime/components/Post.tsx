'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { TAnimeItem } from '@/types/anime-item'

export function Post({
  id,
  score,
  name,
  image,
  aired_on,
  isLast,
  onIntersect
}: TAnimeItem & { isLast: boolean; onIntersect: () => void }) {
  const [isHovered, setHovered] = useState(false)
  const postRef = useRef(null)

  const imgUrl = `https://shikimori.one/${image?.original}`
  const year = aired_on ? new Date(aired_on) : null

  useEffect(() => {
    if (!postRef?.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        onIntersect()
        observer.unobserve(entry.target)
      }
    })

    observer.observe(postRef.current)
  }, [isLast])

  return (
    <div
      ref={postRef}
      className="
      hover:text-amber-600
      hover:translate-y-2
      transition
      duration-100"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Link
        href={`/anime/${id}`}
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
        {year && (
          <p
            className="
          font-normal
        "
          >
            ({year.getFullYear()})
          </p>
        )}
      </Link>
    </div>
  )
}
