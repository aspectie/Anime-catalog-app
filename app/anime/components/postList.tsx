'use client';

import React from "react";
import useSWR from "swr";

import {AnimePost} from "./AnimePost";

import {getTop20Posts} from "@/lib/posts";

export function PostList() {
  const { data: posts, error, isLoading } = useSWR('animePosts', getTop20Posts)

  debugger

  if (error) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (posts && posts.length > 0) {
    return (
      posts.map((p: any) => (<AnimePost post={p} key={p.id}/>))
    )
  }
}