import { TWatchItem } from '@/types/WatchItem'

export async function getWatchList(): Promise<TWatchItem[] | null> {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/watch-list/`
  const res = await fetch(URL)

  if (res.status !== 200) {
    return null
  }

  return res.json()
}
