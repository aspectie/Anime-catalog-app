'use client'

import { TOption } from '@/types/ui'
import Form from 'react-bootstrap/Form'

export function Select({
  options,
  onChange
}: {
  options: Array<TOption>
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}) {
  return (
    <Form.Select
      size="sm"
      onChange={onChange}
    >
      {options.map((o) => {
        return (
          <option
            value={o.value}
            key={o.value}
          >
            {o.title}
          </option>
        )
      })}
    </Form.Select>
  )
}