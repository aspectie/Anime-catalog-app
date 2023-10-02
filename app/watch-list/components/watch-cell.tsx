'use client'

import { useRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUser } from '@clerk/nextjs'

import { TWatchRecord } from '@/types/watch-item'
import { TWatchColumn, RendererParams } from './watch-tabs'

import { baseURL } from '@/constants/api'
import { useRouter } from 'next/navigation'

export function TableCell({
  column,
  record
}: {
  column: TWatchColumn
  record: TWatchRecord
}) {
  const value = useRef<Partial<RendererParams>>({})
  const { user } = useUser()
  const router = useRouter()
  const id = record.id

  // TODO: refactor duplicate code
  const onChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value

    const userId = user?.id
    const postObj = { status, userId }
    let requestInit = {}

    if (status.length > 0) {
      requestInit = {
        method: 'PUT',
        body: JSON.stringify(postObj)
      }
    } else {
      requestInit = {
        method: 'DELETE'
      }
    }

    await fetch(`/api/watch-list/${id}`, requestInit)
    router.refresh()
  }

  switch (column.type) {
    case 'select': {
      value.current = { status: record.watchStatus, onChange }
      break
    }
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
