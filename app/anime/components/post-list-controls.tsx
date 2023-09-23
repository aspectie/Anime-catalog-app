'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { getPosts } from '@/actions/get-posts'
import { PostListFilters } from './post-list-filters'
import { PostListSorter } from './post-list-sorters'

export function PostListControls() {
  const [params, setParams] = useState({ limit: '20', order: 'ranked' })
  const queryClient = useQueryClient()
  const [isMounted, setIsMounted] = useState(false)

  const didMountRef = useRef(false)

  const onChangeHandler = (changedParams: TAnimesApiParams) => {
    setParams({ ...params, ...changedParams })
  }

  useEffect(() => {
    const updatePosts = async () => {
      const data = await getPosts(params)

      queryClient.setQueryData(['animePosts', 'infinite'], () => ({
        pages: [data]
      }))
    }

    if (didMountRef.current) {
      updatePosts()
    }

    didMountRef.current = true
    setIsMounted(true)
  }, [params])

  return (
    <>
      {isMounted && (
        <div
          className="
            border-l-2
            border-l-black
            py-6
            px-4
            ml-6
            sm:px-6
            lg:px-8
            bg-amber-300
          "
        >
          <div className="sticky top-6">
            <PostListFilters onChange={onChangeHandler} />
            <PostListSorter onChange={onChangeHandler} />
          </div>
        </div>
      )}
    </>
  )
}
