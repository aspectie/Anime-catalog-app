'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

import { PostListFilters } from './PostListFilters'
import { PostListSorter } from './PostListSorter'
import { getPosts } from '@/lib/posts'

export function PostListControls() {
  const [params, setParams] = useState({ limit: '20', order: 'ranked' })

  const { mutate } = useSWR('animePosts')

  const didMountRef = useRef(false)

  const onChangeHandler = (changedParams: TAnimesApiParams) => {
    setParams({ ...params, ...changedParams })
  }

  useEffect(() => {
    const updatePosts = async () => {
      const data = await getPosts(params)

      mutate(data)
    }

    if (didMountRef.current) {
      updatePosts()
    }

    didMountRef.current = true
  }, [params])

  return (
    <div
      className="
        flex
        justify-between
        py-6
        px-4
        sm:px-6
        lg:px-8
    "
    >
      <PostListFilters onChange={onChangeHandler} />
      <div className="ml-10">
        <PostListSorter onChange={onChangeHandler} />
      </div>
    </div>
  )
}
