export async function getWatchById(id: number) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/watch-list/${id}`
  const res = await fetch(URL, { cache: 'no-store' })

  if (res.status !== 200) {
    return null
  }

  return res.json()
}
