import React from 'react'

import { Header } from '@components'
import { PostList } from './components/PostList'
import { PostListSorting } from './components/PostListSorting'
import PostListFilters from './components/PostListFilters'

export default function Animes() {
  return (
    <>
      <Header>Top anime list</Header>
      <div
        className="
          py-6
          px-4
          sm:px-6
          lg:px-8
      "
      >
        <PostListSorting />
      </div>
      <div
        className="
          flex
          py-6
          px-4
          
      "
      >
        <div
          className="
            w-1/5
          "
        >
          <PostListFilters />
        </div>
        <div
          className="
          grid
          gap-10
          xl:grid-cols-6
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
          px-4
          sm:px-6
          lg:px-8
        "
        >
          <PostList />
        </div>
      </div>
    </>
  )
}
