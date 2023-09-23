import React from 'react'

import { Header } from '@components'
import { Post } from './components/post'

import { getPostById } from '@/actions/get-post-by-id'

export default async function AnimePage({
  params
}: {
  params: {
    id: string
  }
}) {
  const post = await getPostById(Number(params.id))

  const imgUrl = `https://shikimori.one/${post?.image?.original}`

  return (
    <>
      <Header isWithBackButton={true}>{post?.name}</Header>
      <div className="container text-gray-300">
        <h2 className="p-6">{post?.russian}</h2>
        <Post
          id={Number(params.id)}
          imgUrl={imgUrl}
          genres={post?.genres}
          episodes={post?.episodes}
          kind={post?.kind}
          status={post?.status}
          score={post?.score}
          licensors={post?.licensors}
          description={post?.description}
        />
      </div>
    </>
  )
}
