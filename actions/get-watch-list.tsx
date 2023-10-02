import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { getPostById } from './get-post-by-id'
import { TWatchRecord } from '@/types/watch-item'

export async function getWatchList(): Promise<TWatchRecord[]> {
  const { userId } = auth()

  if (!userId) {
    return []
  }

  const watchItems = await prismadb.watchList.findMany({
    where: {
      userId
    }
  })

  if (!watchItems) {
    return []
  }
  const data = (await Promise.all(
    watchItems.map(async (item) => {
      const post = await getPostById(item.watchId)

      return { ...post, watchStatus: item.status }
    })
  )) as TWatchRecord[]

  return data
}
