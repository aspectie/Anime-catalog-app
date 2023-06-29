'use client'

import React from 'react'
import useSWR from 'swr'

import { AnimePost } from './AnimePost'

import { getTop20Posts } from '@/lib/posts'

export function PostList() {
  const { data: posts, error, isLoading } = useSWR('animePosts', getTop20Posts)

  if (error) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return posts.map(({ id, score, name, image, released_on }: any) => {
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
