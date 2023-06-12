import React from 'react'

import Link from 'next/link';

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Anime', href: '/anime'}
]

function Header() {
  return (
    <div className="bg-gray-900">
      <div className="flex h-16 items-center justify-between">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header