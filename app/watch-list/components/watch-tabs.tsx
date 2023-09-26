'use client'

import React, { FC, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

import { TColumn } from '@/types/ui'
import { TAnimeItem } from '@/types/anime-item'
import { TWatchStatus } from '@/types/watch-item'

import { tabs } from '@/constants/tabs'

import { getPostById } from '@/actions/get-post-by-id'
import { getWatchList } from '@/actions/get-watch-list'
import { WatchTable } from './watch-table'

export type TWatchColumnName =
  | keyof Omit<TAnimeItem, 'genres' | 'licensors'>
  | 'watchStatus'

export type TWatchColumnType = 'image' | 'default'

export type TWatchColumn = TColumn<{
  name: TWatchColumnName
  title: string
  type: TWatchColumnType
  renderer: ({}: Record<string, string>) => React.JSX.Element
}>
export type TWatchRecord = TAnimeItem & { watchStatus: TWatchStatus }

const columns: TWatchColumn[] = [
  {
    name: 'image',
    title: 'Thumbnail',
    type: 'image',
    renderer: ({ url }) => <img src={url} />
  },
  {
    name: 'name',
    title: 'Title',
    type: 'default',
    renderer: ({ text }) => <span>{text}</span>
  },
  {
    name: 'watchStatus',
    title: 'Status',
    type: 'default',
    renderer: ({ text }) => <span>{text}</span>
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
                {tabs.map(({ title, value }) => (
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
              {tabs.map(({ value }) => (
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
