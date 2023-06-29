import React from 'react'

export function Link({ children, url, className }) {
  return (
    <a
      href={url}
      className={className}
    >
      {children}
    </a>
  )
}
