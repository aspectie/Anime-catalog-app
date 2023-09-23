import React from 'react'

import { Header, Navbar } from '@components'
import { PostList } from './components/post-list'
import { PostListControls } from './components/post-list-controls'

export default function AnimesPage() {
  return (
    <>
      <Navbar isSearchEnabled={true} />
      <Header>Top anime list</Header>
      <div className="container flex">
        <PostListControls />
        <div
          className="
            grid
            gap-10
            bg-gray-900
            xl:grid-cols-5
            lg:grid-cols-4
            md:grid-cols-2
            sm:grid-cols-1
            p-14
          "
        >
          <PostList />
        </div>
      </div>
    </>
  )
}
