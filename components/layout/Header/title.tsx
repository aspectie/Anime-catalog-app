import React from 'react'

function Title({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white shadow">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{children}</h1>
      </div>
    </div>
  )
}

export default Title