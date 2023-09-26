'use client'

import { baseURL } from '@/constants/api'
import { TWatchColumn, TWatchRecord } from './watch-tabs'
import { useRef, useState } from 'react'

export function TableCell({
  column,
  record
}: {
  column: TWatchColumn
  record: TWatchRecord
}) {
  const value = useRef<Record<string, string>>({})

  switch (column.type) {
    case 'image': {
      value.current = { url: baseURL + String(record.image?.x48) }
      break
    }
    case 'default': {
      value.current = { text: String(record[column.name]) }
      break
    }
  }

  return <td>{column.renderer(value.current)}</td>
}
