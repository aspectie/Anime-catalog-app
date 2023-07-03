'use client'

import React, { useState } from 'react'
import { Select } from '@components'
import useSWR from 'swr'
import { getSortedPosts } from '@/lib/posts'
import { Constants } from '@/constants'

export async function PostListSorting() {
  const { mutate } = useSWR('animePosts')

  async function onChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target
    const value = target.value

    const params = {
      limit: '20',
      order: value
    }

    const sortedPosts = await getSortedPosts(params)
    await mutate(sortedPosts)
  }

  return (
    <>
      <span>Sort by:</span>
      <div
        className="
          inline-block
          ml-2
      "
      >
        <Select
          options={Constants.orderOptions}
          onChange={onChangeSelect}
        />
      </div>
    </>
  )
}
