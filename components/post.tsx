'use-client'

import React, { useState } from 'react'

export function Post({post} : any) {
  const imgUrl = `https://shikimori.one/${post.image.original}`

  return (
    <div>
      <img src={imgUrl} />
      <p>{post.name}</p>
    </div>
  )
}