'use client'

import React, { useState } from 'react'

import { Select } from '@components'
import { Constants } from '@/constants'

export function PostListSorter({
  onChange
}: {
  onChange: (changedParams: TAnimesApiParams) => void
}) {
  function onChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target
    const value = target.value

    onChange({ order: value })
  }

  return (
    <div>
      <span>Sort by:</span>
      <div
        className="
          inline-block
          ml-2
      "
      >
        <Select
          options={Constants.orderOptions}
          onChange={onChangeSelect}
        />
      </div>
    </div>
  )
}
