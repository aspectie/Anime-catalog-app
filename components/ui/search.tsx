'use client'

import React from 'react'
import { Form } from 'react-bootstrap'

export function Search({
  placeholder,
  onChange
}: {
  placeholder: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}) {
  return (
    <div className="w-96">
      <Form.Control
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
