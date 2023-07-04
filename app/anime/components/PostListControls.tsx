'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import { PostListFilters } from './PostListFilters'
import { PostListSorter } from './PostListSorter'
import { getPosts } from '@/lib/posts'

export function PostListControls() {
  const [params, setParams] = useState({ limit: '20', order: 'ranked' })

  const { mutate } = useSWR('animePosts')

  const onChangeHandler = (changedParams: TAnimesApiParams) => {
    setParams({ ...params, ...changedParams })
  }

  useEffect(() => {
    const getPostsCallback = async () => {
      const data = await getPosts(params)

      mutate(data)
    }
    getPostsCallback()
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
