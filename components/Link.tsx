import React, { ReactNode } from 'react'

export function Link({
  children,
  url,
  className
}: {
  children: ReactNode
  url: string
  className: string
}) {
  return (
    <a
      href={url}
      className={className}
    >
      {children}
    </a>
  )
}
