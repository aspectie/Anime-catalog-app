import React from 'react'
import { Select } from '@components'
import { Constants } from '@/constants'
import { TOption } from '@/types/ui'

export function PostListFilters({
  onChange
}: {
  onChange: (changedParams: TAnimesApiParams) => void
}) {
  function getParamValue(selectedItems: Array<TOption>) {
    return selectedItems.reduce((acc, item) => {
      return acc === '' ? item.value : `${acc},${item.value}`
    }, '')
  }

  function onChangeSeason(selectedItems: Array<TOption>) {
    const season = getParamValue(selectedItems)
    onChange({ season })
  }

  function onChangeStatus(selectedItems: Array<TOption>) {
    const status = getParamValue(selectedItems)
    onChange({ status })
  }

  function onChangeKind(selectedItems: Array<TOption>) {
    const kind = getParamValue(selectedItems)
    onChange({ kind })
  }

  function onChangeRating(selectedItems: Array<TOption>) {
    const rating = getParamValue(selectedItems)
    onChange({ rating })
  }

  return (
    <div className="flex flex-1">
      <div className="w-1/4">
        <Select
          isMultiple
          options={Constants.seasonOptions}
          placeholder="Choose season"
          onSelect={onChangeSeason}
          onRemove={onChangeSeason}
        />
      </div>
      <div className="w-1/4 ml-10">
        <Select
          isMultiple
          options={Constants.statusOptions}
          placeholder="Choose status"
          onSelect={onChangeStatus}
          onRemove={onChangeStatus}
        />
      </div>
      <div className="w-1/4 ml-10">
        <Select
          isMultiple
          options={Constants.kindOptions}
          placeholder="Choose kind"
          onSelect={onChangeKind}
          onRemove={onChangeKind}
        />
      </div>
      <div className="w-1/4 ml-10">
        <Select
          isMultiple
          options={Constants.ratingOptions}
          placeholder="Choose rating"
          onSelect={onChangeRating}
          onRemove={onChangeRating}
        />
      </div>
    </div>
  )
}
