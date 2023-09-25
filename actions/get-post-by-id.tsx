import { baseApiURL } from '@/constants/api'
import { TAnimeItem } from '@/types/anime-item'

export async function getPostById(id: number): Promise<TAnimeItem | null> {
  const url = new URL(`${baseApiURL}/animes/${id}`)
  const response = await fetch(url)

  if (response.status !== 200) {
    return null
  }

  return response.json()
}
