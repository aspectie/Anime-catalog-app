'use client'

import { TOption } from '@/types/ui'
import Form from 'react-bootstrap/Form'
import { Multiselect } from 'multiselect-react-dropdown'

export function Select({
  options,
  isMultiple,
  onChange,
  onSelect,
  onRemove
}: {
  options: Array<TOption>
  isMultiple?: boolean
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onSelect?: React.ChangeEventHandler<HTMLSelectElement>
  onRemove?: React.ChangeEventHandler<HTMLSelectElement>
}) {
  return (
    <div>
      {isMultiple ? (
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="title"
        />
      ) : (
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
      )}
    </div>
  )
}