'use client'

import { TOption } from '@/types/ui'
import Form from 'react-bootstrap/Form'
import { Multiselect } from 'multiselect-react-dropdown'

export function Select({
  options,
  style,
  className,
  isMultiple,
  placeholder,
  value,
  onChange,
  onSelect,
  onRemove
}: {
  options: Array<TOption>
  isMultiple?: boolean
  placeholder?: string
  style?: object
  className?: string
  value?: string | number | string[]
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
          style={style}
          className={className}
          displayValue="title"
          avoidHighlightFirstOption
          closeIcon="cancel"
          placeholder={placeholder}
        />
      ) : (
        <Form.Select
          value={value}
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
