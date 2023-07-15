import Providers from '@/utils/Providers'
import './globals.css'

export const metadata = {
  title: 'Anime catalog',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
