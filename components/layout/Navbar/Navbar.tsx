'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import debounce from 'lodash.debounce'

import { Search } from '@components'
import { getPosts } from '@/actions/get-posts'

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
    name: 'Top animes',
    href: '/anime'
  },
  {
    name: 'Watch list',
    href: '/watch-list'
  }
]

export function Navbar({ isSearchEnabled }: { isSearchEnabled?: boolean }) {
  const [params, setParams] = useState(useParams())
  const didMountRef = useRef(false)
  const queryClient = useQueryClient()

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setParams({ search: value })
  }

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), [params])

  useEffect(() => {
    const updatePosts = async () => {
      const data = await getPosts(params)

      queryClient.setQueryData(['animePosts', 'infinite'], () => ({
        pages: [data]
      }))
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
    <div className="bg-gray-900 ">
      <div className="flex h-16 items-center justify-between container">
        <div className="ml-3 flex items-baseline space-x-4 ">
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
        <AuthControls />
      </div>
    </div>
  )
}

function AuthControls() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button
            className="
                  text-gray-300 
                  text-sm
                  font-medium
                  hover:text-amber-400
                "
          >
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            className="
                  ml-4
                  text-gray-300 
                  text-sm
                  font-medium
                  hover:text-amber-400
                "
          >
            Sign up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  )
}
