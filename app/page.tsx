import { Header } from '@components'
import { Navbar } from '@components'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header>Home</Header>
      <div className="container">
        <main className="p-6">
          <h1 className="text-white">Home body</h1>
        </main>
      </div>
    </>
  )
}
