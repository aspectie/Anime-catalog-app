import Header from '@/components/layout/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Shiki',
  description: 'Anime app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
