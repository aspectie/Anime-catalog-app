import React from 'react'

import { Header, Navbar } from '@components'
import { PostList } from './components/post-list'
import { PostListControls } from './components/post-list-controls'

export default function AnimesPage() {
  return (
    <>
      <Navbar isSearchEnabled={true} />
      <Header>Top anime list</Header>
      <div className="container">
        <PostListControls />
        <div
          className="
          grid
          gap-10
          xl:grid-cols-6
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
          px-4
          py-6
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
