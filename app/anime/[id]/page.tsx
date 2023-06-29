import React from 'react'

import Title from '@/components/layout/Header/Title'
import { BackButton } from '@/components/layout/Header/BackButton'

import { getPostById } from '@/lib/posts'

export default async function Anime({ params }) {
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
  } = await getPostById(params.id)

  const imgUrl = `https://shikimori.one/${image.original}`

  return (
    <>
      <BackButton />
      <Title>{name}</Title>
      <h2 className="p-6">{russian}</h2>

      <div className="p-6 flex">
        <div className="basis-1/5">
          <img
            src={imgUrl}
            className="w-full"
          />
        </div>
        <div className="basis-4/5 ml-10">
          <p className="mb-3">
            <span className="mr-1">Genres:</span>
            {genres.map((genre, index) => {
              return (
                <span className="mr-1">
                  {genre.name}
                  {genres.length - 1 !== index ? ',' : '.'}
                </span>
              )
            })}
          </p>
          <p className="mb-3">
            <span className="mr-1">Episodes:</span>
            <span>{episodes}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Type:</span>
            <span>{kind}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Status:</span>
            <span>{status}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Score:</span>
            <span>{score}</span>
          </p>
          {licensors.length > 0 && (
            <p className="mb-3">
              <span className="mr-1">Licensors:</span>
              {licensors.map((licensor, index) => {
                return (
                  <span className="mr-1">
                    {licensor}
                    {licensors.length - 1 !== index ? ',' : '.'}
                  </span>
                )
              })}
            </p>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2  text-xl">Description:</h3>
        <p className="mb-3">
          <span>{description}</span>
        </p>
      </div>
    </>
  )
}
