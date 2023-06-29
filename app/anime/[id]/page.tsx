import React from 'react';

import Title from '@/components/layout/Header/Title';
import {BackButton} from "@/components/layout/Header/BackButton";

import { getPostById } from '@/lib/posts';

export default async function Anime({params}) {
  const post = await getPostById(params.id);
  const imgUrl = `https://shikimori.one/${post.image.original}`

  return (
    <>
      <BackButton />
      <Title>{post.name}</Title>
      <h2 className='p-6'>{post.russian}</h2>

      <div className='p-6 flex'>
        <div className="basis-1/5">
          <img
              src={imgUrl}
              className="w-full"
          />
        </div>
        <div className="basis-4/5 ml-10">
          <p className="mb-3">
            <span className="mr-1">Genres:</span>
            {
              post.genres.map((genre, index) => {
                return (
                    <span className="mr-1">{genre.name}{(post.genres.length - 1) !== index ? ',' : '.'}</span>
                )
              })
            }
          </p>
          <p className="mb-3">
            <span className="mr-1">Episodes:</span>
            <span>{post.episodes}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Type:</span>
            <span>{post.kind}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Status:</span>
            <span>{post.status}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1">Score:</span>
            <span>{post.score}</span>
          </p>
          {
            post.licensors.length > 0 &&
            <p className="mb-3">
              <span className="mr-1">Licensors:</span>
              {
                post.licensors.map((licensor, index) => {
                  return (
                      <span className="mr-1">{licensor}{(post.licensors.length - 1) !== index ? ',' : '.'}</span>
                  )
                })
              }
            </p>
          }
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2  text-xl">Description:</h3>
        <p className="mb-3">
          <span>{post.description}</span>
        </p>
      </div>
    </>
  )
}
