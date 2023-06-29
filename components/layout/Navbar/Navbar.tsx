import React from 'react'

import Link from 'next/link'

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

export function Navbar() {
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
        </div>
      </div>
    </div>
  )
}
