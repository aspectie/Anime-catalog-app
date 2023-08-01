import Providers from '@/utils/Providers'
import './globals.css'

export const metadata = {
  title: 'Anime catalog',
  description: 'Anime app'
}
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="h-full">
        <ClerkProvider>
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
