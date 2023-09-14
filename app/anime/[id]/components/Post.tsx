'use client'

import { useUser } from '@clerk/nextjs'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { TAnimeItem } from '@/types/anime-item'

import { Select } from '@components'
import { Constants } from '@/constants'

import { getWatchById } from '@/actions/get-watch-by-id'

export function Post({
  id,
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
  const queryClient = useQueryClient()

  const mutation = useMutation(
    (status: string) => {
      const userId = user?.id
      const postObj = { status, userId }
      let requestInit = {}

      if (status.length > 0) {
        requestInit = {
          method: 'PUT',
          body: JSON.stringify(postObj)
        }
      } else {
        requestInit = {
          method: 'DELETE'
        }
      }
      return fetch(`/api/watch-list/${id}`, requestInit)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`watchStatus_${id}`])
      }
    }
  )

  const onChangeWatchStatus = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const status = event.target.value

    mutation.mutate(status)
  }

  const { data, error } = useQuery([`watchStatus_${id}`], () =>
    getWatchById(id)
  )

  return (
    <>
      <div className="p-6 flex">
        <div className="basis-1/5">
          {/* TODO: skeleton for image */}
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
            value={data ? data.status : ''}
            options={Constants.watchStatusOptions}
            onChange={onChangeWatchStatus}
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
