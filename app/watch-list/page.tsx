import React from 'react'

import { Header, Navbar } from '@components'
import { WatchTabs } from './components/watchTabs'

export default function WatchListPage() {
  return (
    <>
      <Navbar />
      <Header isWithBackButton={true}>My watch list</Header>
      <div className="container">
        <WatchTabs />
      </div>
    </>
  )
}



