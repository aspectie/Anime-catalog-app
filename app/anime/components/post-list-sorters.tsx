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
    <div className="mb-4">
      <p className="mb-2 text-gray-900 text-xl">Sort by:</p>
      <div className="text-xl">
        <Select
          options={Constants.orderOptions}
          onChange={onChangeSelect}
        />
      </div>
    </div>
  )
}
