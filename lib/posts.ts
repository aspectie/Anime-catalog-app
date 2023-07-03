const baseURL = 'https://shikimori.one/api';

export async function getTop20Posts() {
  const url = new URL(`${baseURL}/animes`);

  url.search = new URLSearchParams({
    limit: '20',
    order: 'ranked'
  }).toString();

  const response = await fetch(url);

  return response.json()
}

export async function getSortedPosts(params: Record<string, string>) {
  const url = new URL(`${baseURL}/animes`);
  const a = new URLSearchParams(params)

  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);

  return response.json()
}

export async function getPostById(id: string) {
  const url = new URL(`${baseURL}/animes/${id}`);
  const response = await fetch(url);

  return response.json()
}