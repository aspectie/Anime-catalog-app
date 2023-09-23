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
    <>
      <div className="mb-4 text-xl">
        <p className="mb-2 text-gray-900">Season: </p>
        <Select
          isMultiple
          options={Constants.seasonOptions}
          className="postFilter"
          placeholder="Choose season"
          onSelect={onChangeSeason}
          onRemove={onChangeSeason}
        />
      </div>
      <div className="mb-4 text-xl">
        <p className="mb-2 text-gray-900 font-medium">Status: </p>
        <Select
          isMultiple
          options={Constants.statusOptions}
          className="postFilter"
          placeholder="Choose status"
          onSelect={onChangeStatus}
          onRemove={onChangeStatus}
        />
      </div>
      <div className="mb-4 text-xl">
        <p className="mb-2 text-gray-900 font-medium">Kind: </p>
        <Select
          isMultiple
          options={Constants.kindOptions}
          className="postFilter"
          placeholder="Choose kind"
          onSelect={onChangeKind}
          onRemove={onChangeKind}
        />
      </div>
      <div className="mb-4 text-xl">
        <p className="mb-2 text-gray-900 font-medium">Rating: </p>
        <Select
          isMultiple
          options={Constants.ratingOptions}
          className="postFilter"
          placeholder="Choose rating"
          onSelect={onChangeRating}
          onRemove={onChangeRating}
        />
      </div>
    </>
  )
}
