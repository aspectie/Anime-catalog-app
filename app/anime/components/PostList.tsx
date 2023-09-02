'use client'

import React, { useState } from 'react'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { TAnimeItem } from '@/types/AnimeItem'

import { Post } from './Post'

import { getPosts } from '@/actions/get-posts'

export function PostList() {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data,
    error,
    fetchNextPage,
    status
  }: {
    error: Error | null
    data: InfiniteData<TAnimeItem[]> | undefined
    fetchNextPage: ({ pageParam }: { pageParam: number }) => void
    isFetching: boolean
    status: string
  } = useInfiniteQuery({
    queryKey: ['animePosts', 'infinite'],
    queryFn: ({ pageParam = 1 }) => getPosts({ page: pageParam }),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  })

  if (status === 'error') {
    return <div>{error && error.message}</div>
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  function loadMorePosts() {
    setCurrentPage(currentPage + 1)
    fetchNextPage({ pageParam: currentPage })
  }

  return (
    <>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map(
            (
              { id, score, name, image, aired_on }: TAnimeItem,
              index: number
            ) => (
              <Post
                key={id}
                id={id}
                score={score}
                name={name}
                image={image}
                aired_on={aired_on}
                isLast={index === group.length - 1}
                onIntersect={loadMorePosts}
              />
            )
          )}
        </React.Fragment>
      ))}
    </>
  )
}
