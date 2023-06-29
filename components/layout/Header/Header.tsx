'use client'

import React from 'react'

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow">
      <div className="mx-auto p-6 flex items-center">
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </div>
    </div>
  )
}
