import { TOption } from '@/types/ui'
import { Select } from '@components'
import React from 'react'
import { Constants } from '@/constants'

function PostListFilters() {
  return (
    <div>
      <Select
        isMultiple
        options={Constants.seasonOptions}
        // onChange={onChangeSelect}
      />
    </div>
  )
}

export default PostListFilters
