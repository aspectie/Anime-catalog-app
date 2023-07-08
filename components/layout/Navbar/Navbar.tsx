'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import debounce from 'lodash.debounce'

import { Search } from '@components'
import { getPosts } from '@/lib/posts'

type TNavigation = {
  name: string
  href: string
}

const navigation = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Anime',
    href: '/anime'
  }
]

export function Navbar({ isSearchEnabled }: { isSearchEnabled?: boolean }) {
  const { mutate } = useSWR('animePosts')
  const [params, setParams] = useState(useParams())
  const didMountRef = useRef(false)

  function onChange(event) {
    const value = event.target.value
    setParams({ search: value })
  }

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), [params])

  useEffect(() => {
    const updatePosts = async () => {
      const data = await getPosts(params)

      mutate(data)
    }

    if (didMountRef.current) {
      updatePosts()
    }

    didMountRef.current = true

    return () => {
      debouncedChangeHandler.cancel()
    }
  }, [params])

  return (
    <div className="bg-gray-900">
      <div className="flex h-16 items-center justify-between">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item: TNavigation) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                px-3
                py-2
                text-gray-300
                text-sm
                font-medium
                rounded-md
                hover:bg-gray-700
                hover:text-amber-400
              "
            >
              {item.name}
            </Link>
          ))}
          {isSearchEnabled && (
            <Search
              placeholder="Type anime title"
              onChange={debouncedChangeHandler}
            />
          )}
        </div>
      </div>
    </div>
  )
}
