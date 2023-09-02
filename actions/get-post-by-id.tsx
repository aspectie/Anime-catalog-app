const baseURL = 'https://shikimori.one/api'

export async function getPostById(id: number) {
  const url = new URL(`${baseURL}/animes/${id}`)
  const response = await fetch(url)

  return response.json()
}
