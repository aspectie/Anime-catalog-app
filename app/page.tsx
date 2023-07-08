import { Header } from '@components'
import { Navbar } from '@components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header>Home</Header>
      <main className="p-6">
        <h1>Home body</h1>
      </main>
    </>
  )
}
