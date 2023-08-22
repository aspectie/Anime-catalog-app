'use client'

import { useUser } from '@clerk/nextjs'

import { TAnimeItem } from '@/types/AnimeItem'

import { Select } from '@components'
import { Constants } from '@/constants'

export function Post({
  imgUrl,
  genres,
  episodes,
  kind,
  status,
  score,
  licensors,
  description
}: TAnimeItem & { imgUrl: string }) {
  const { user } = useUser()

  return (
    <>
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
            {genres?.map((genre, index) => {
              return (
                <span
                  className="mr-1"
                  key={genre.name}
                >
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
          {licensors && licensors.length > 0 && (
            <p className="mb-3">
              <span className="mr-1">Licensors:</span>
              {licensors.map((licensor, index) => {
                return (
                  <span
                    className="mr-1"
                    key={licensor}
                  >
                    {licensor}
                    {licensors.length - 1 !== index ? ',' : '.'}
                  </span>
                )
              })}
            </p>
          )}
        </div>
      </div>
      <div className="p-6 flex">
        <div className="basis-1/5">
          <Select
            options={Constants.watchStatusOptions}
            //  TODO: onSelect={onChangeWatchStatus}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl">Description:</h3>
        <p className="mb-3">
          <span>{description}</span>
        </p>
      </div>
    </>
  )
}