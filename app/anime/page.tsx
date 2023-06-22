import Title from '@/components/layout/Header/title'
import {Post} from './components/post'
import { getPosts } from '@/lib/posts'
import React from 'react'
import Select from '@/components/ui/select'

export default async function Animes() {
  const posts = await getPosts({
    limit: 20,
    order: 'ranked'
  })

  const orderOptions= [
    {
      value: 'rank',
      title: 'Rating'
    }, {
      value: 'popularity',
      title: 'Popularity'
    }, {
      value: 'name',
      title: 'Title'
    }, {
      value: 'aired_on',
      title: 'Release date'
    },
  ]

  return (
    <>
      <Title>Top anime list</Title>
      <div className="
          py-6
          px-4
          sm:px-6
          lg:px-8
      ">
        <span>Sort by:</span>
        <div className="
          inline-block
          ml-2
        ">
          <Select options={orderOptions} />
        </div>
      </div>
      <div className="
          grid
          gap-10
          xl:grid-cols-6
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
          py-6
          px-4
          sm:px-6
          lg:px-8
      ">
        {
          posts.map((post: any) => <Post post={post} key={post.id}/>)
        }
      </div>
    </>
  )
}