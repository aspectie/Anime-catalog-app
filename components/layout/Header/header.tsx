'use client'

import React from 'react'
import { BackButton } from './back-button'

export function Header({
  children,
  isWithBackButton
}: {
  children: React.ReactNode
  isWithBackButton?: boolean
}) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-0% to-gray-900 to-90% border-y-black border-y-2">
      <div className="container">
        <div className="mx-auto p-6 flex items-center ">
          {isWithBackButton && <BackButton />}
          <h1 className="text-3xl font-bold text-gray-100">{children}</h1>
        </div>
      </div>
    </div>
  )
}
