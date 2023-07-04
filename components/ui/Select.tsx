'use client'

import { TOption } from '@/types/ui'
import Form from 'react-bootstrap/Form'
import { Multiselect } from 'multiselect-react-dropdown'

export function Select({
  options,
  isMultiple,
  placeholder,
  onChange,
  onSelect,
  onRemove
}: {
  options: Array<TOption>
  isMultiple?: boolean
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onSelect?: (selectedItems: Array<TOption>) => void
  onRemove?: (selectedItems: Array<TOption>) => void
}) {
  return (
    <div>
      {isMultiple ? (
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="title"
          avoidHighlightFirstOption
          closeIcon="cancel"
          placeholder={placeholder}
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