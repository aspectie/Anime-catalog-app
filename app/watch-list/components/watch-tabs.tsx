'use client'

import React from 'react'
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
  | keyof Omit<TAnimeItem, 'image' | 'genres' | 'licensors'>
  | 'watchStatus'

export type TWatchColumn = TColumn<{ name: TWatchColumnName; title: string }>
export type TWatchRecord = TAnimeItem & { watchStatus: TWatchStatus }

const columns: TWatchColumn[] = [
  {
    name: 'name',
    title: 'Title'
  },
  {
    name: 'watchStatus',
    title: 'Status'
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
              className="flex-column"
            >
              <Row>
                {tabs.map(({ title, value }) => (
                  <Col key={value}>
                    <Nav.Item>
                      <Nav.Link eventKey={value}>{title}</Nav.Link>
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
