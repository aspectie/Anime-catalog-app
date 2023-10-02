import React from 'react'

import { Header, Navbar } from '@components'
import { WatchTabs } from './components/watch-tabs'
import { getWatchList } from '@/actions/get-watch-list'

export default async function WatchListPage() {
  const data = await getWatchList()

  return (
    <>
      <Navbar />
      <Header isWithBackButton={true}>My watch list</Header>
      <div className="container">
        <WatchTabs data={data} />
      </div>
    </>
  )
}
