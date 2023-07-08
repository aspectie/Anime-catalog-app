'use client'

import React from 'react'
import { Form } from 'react-bootstrap'

export function Search({
  placeholder,
  onChange
}: {
  placeholder: string
  onChange: () => void
}) {
  return (
    <div>
      <Form.Control
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
