import { baseApiURL } from '@/constants/api'
import { TAnimeItem } from '@/types/anime-item'

const defaultParams = {
  limit: '20',
  order: 'ranked'
}

export async function getPosts(
  params?: Record<string, string>
): Promise<TAnimeItem[] | null> {
  const url = new URL(`${baseApiURL}/animes`)

  if (!params) {
    params = defaultParams
  }
  if (!params.limit) {
    params.limit = defaultParams.limit
  }
  if (!params.order) {
    params.order = defaultParams.order
  }

  url.search = new URLSearchParams(params).toString()

  const response = await fetch(url)

  if (response.status !== 200) {
    return null
  }

  return response.json()
}
