'use client'

import React from 'react'
import useSWR from 'swr'

import { AnimePost } from './AnimePost'

import { getPosts } from '@/lib/posts'
import { TAnimeItem } from '@/types/AnimeItem'

export function PostList() {
  async function getPostsWithoutKey() {
    return await getPosts()
  }

  const {
    data: posts,
    error,
    isLoading
  } = useSWR('animePosts', getPostsWithoutKey)

  if (error) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return posts.map(({ id, score, name, image, released_on }: TAnimeItem) => {
    return (
      <AnimePost
        key={id}
        id={id}
        score={score}
        name={name}
        image={image}
        released_on={released_on}
      />
    )
  })
}
