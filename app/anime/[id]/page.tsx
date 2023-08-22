import React from 'react'

import { Header } from '@components'
import { Post } from './components/Post'

import { getPostById } from '@/lib/posts'

import { TAnimeItem } from '@/types/AnimeItem'

export default async function Anime({
  params
}: {
  params: {
    id: string
  }
}) {
  const {
    name,
    image,
    russian,
    genres,
    episodes,
    kind,
    status,
    score,
    licensors,
    description
  }: TAnimeItem = await getPostById(params.id)

  const imgUrl = `https://shikimori.one/${image?.original}`

  return (
    <>
      <Header isWithBackButton={true}>{name}</Header>
      <div className="container">
        <h2 className="p-6">{russian}</h2>
        <Post
          imgUrl={imgUrl}
          genres={genres}
          episodes={episodes}
          kind={kind}
          status={status}
          score={score}
          licensors={licensors}
          description={description}
        />
      </div>
    </>
  )
}
