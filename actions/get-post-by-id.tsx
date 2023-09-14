import { TAnimeItem } from '@/types/AnimeItem'

const baseURL = 'https://shikimori.one/api'

export async function getPostById(id: number): Promise<TAnimeItem | null> {
  const url = new URL(`${baseURL}/animes/${id}`)
  const response = await fetch(url)

  if (response.status !== 200) {
    return null
  }

  return response.json()
}
