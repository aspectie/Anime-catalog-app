'use client'

import React from 'react'

import { Post } from './Post'

import { getPosts } from '@/lib/posts'
import { TAnimeItem } from '@/types/AnimeItem'
import { useInfiniteQuery } from '@tanstack/react-query'

export function PostList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['animePosts', 'infinite'],
    queryFn: () => getPosts(),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  })

  if (status === 'error') {
    return <div>{error.message}</div>
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map(({ id, score, name, image, released_on }: TAnimeItem) => (
            <Post
              key={id}
              id={id}
              score={score}
              name={name}
              image={image}
              released_on={released_on}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  )
}
