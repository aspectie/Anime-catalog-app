'use client'

import { baseURL } from '@/constants/api'
import { TWatchColumn, TWatchRecord, RendererParams } from './watch-tabs'
import { useRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUser } from '@clerk/nextjs'

export function TableCell({
  column,
  record
}: {
  column: TWatchColumn
  record: TWatchRecord
}) {
  const value = useRef<Partial<RendererParams>>({})
  const { user } = useUser()
  const queryClient = useQueryClient()
  const id = record.id

  // TODO: refactor duplicate code

  const mutation = useMutation(
    (status: string) => {
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
      return fetch(`/api/watch-list/${id}`, requestInit)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`watchRecords`])
      }
    }
  )

  const onChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value

    mutation.mutate(status)
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
