'use client'

import React, { ChangeEventHandler } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

import { TColumn } from '@/types/ui'
import { TAnimeItem } from '@/types/anime-item'
import { TWatchStatus } from '@/types/watch-item'

import { Constants } from '@/constants'

import { getPostById } from '@/actions/get-post-by-id'
import { getWatchList } from '@/actions/get-watch-list'

import { Select } from '@/components'
import { WatchTable } from './watch-table'

type TWatchColumnName =
  | keyof Omit<TAnimeItem, 'genres' | 'licensors'>
  | 'watchStatus'

type TWatchColumnType = 'image' | 'default' | 'select'

export type RendererParams = {
  url: string
  text: string
  status: string
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export type TWatchColumn = TColumn<{
  name: TWatchColumnName
  title: string
  type: TWatchColumnType
  classNames: string
  renderer: ({}: Partial<RendererParams>) => React.JSX.Element
}>
export type TWatchRecord = TAnimeItem & { watchStatus: TWatchStatus }

const columns: TWatchColumn[] = [
  {
    name: 'image',
    title: 'Thumbnail',
    type: 'image',
    classNames: 'w-48',
    renderer: ({ url }) => (
      <img
        src={url}
        className="m-auto"
      />
    )
  },
  {
    name: 'name',
    title: 'Title',
    type: 'default',
    classNames: 'w-2/5',
    renderer: ({ text }) => <span>{text}</span>
  },
  {
    name: 'score',
    title: 'Rating',
    type: 'default',
    classNames: 'w-32',
    renderer: ({ text }) => <span>{text}</span>
  },
  {
    name: 'kind',
    title: 'Type',
    type: 'default',
    classNames: 'w-32',
    renderer: ({ text }) => <span>{text}</span>
  },
  {
    name: 'watchStatus',
    title: 'Status',
    type: 'select',
    classNames: '',
    renderer: ({ status, onChange }) => {
      return (
        <Select
          value={status ? status : ''}
          options={Constants.watchStatusOptions}
          onChange={onChange}
        />
      )
    }
  }
]

export function WatchTabs() {
  async function getWatchRecords() {
    const watchItems = await getWatchList()

    if (!watchItems) {
      return
    }

    return Promise.all(
      watchItems.map(async (item) => {
        const post = await getPostById(item.watchId)

        return { ...post, watchStatus: item.status }
      })
    )
  }

  const { data, isFetched } = useQuery({
    queryKey: [`watchRecords`],
    queryFn: () => getWatchRecords()
  })

  return (
    <>
      {isFetched ? (
        <div
          className="
            px-4
            py-6
          "
        >
          <Tab.Container
            defaultActiveKey="watched"
            id="uncontrolled-tab-example"
          >
            <Nav
              variant="pills"
              className="flex-column mb-8"
            >
              <Row>
                {Constants.watchItemsTabs.map(({ title, value }) => (
                  <Col key={value}>
                    <Nav.Item>
                      <Nav.Link
                        className="text-white"
                        eventKey={value}
                      >
                        {title}
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                ))}
              </Row>
            </Nav>
            {/* TODO: fix type */}
            <Tab.Content>
              {Constants.watchItemsTabs.map(({ value }) => (
                <Tab.Pane
                  eventKey={value}
                  key={value}
                >
                  <WatchTable
                    columns={columns}
                    records={
                      data
                        ? data.filter((rec) => rec.watchStatus === value)
                        : null
                    }
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      ) : (
        'loading..'
      )}
    </>
  )
}
