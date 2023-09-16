import { TWatchItem } from '@/types/watch-item'

export async function getWatchById(id: number): Promise<TWatchItem | null> {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/watch-list/${id}`
  const res = await fetch(URL)

  if (res.status !== 200) {
    return null
  }

  return res.json()
}
