import React from 'react'
import { Select } from '@components'
import { Constants } from '@/constants'
import { TOption } from '@/types/ui'

export function PostListFilters({
  onChange
}: {
  onChange: (changedParams: TAnimesApiParams) => void
}) {
  function onChangeSelect(selectedItems: Array<TOption>) {
    const season = selectedItems.reduce((acc, item) => {
      return acc === '' ? item.value : `${acc},${item.value}`
    }, '')

    onChange({ season })
  }

  return (
    <div
      className="
      w-1/4
    "
    >
      <Select
        isMultiple
        options={Constants.seasonOptions}
        placeholder="Choose season"
        onSelect={onChangeSelect}
        onRemove={onChangeSelect}
      />
    </div>
  )
}
