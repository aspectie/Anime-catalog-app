const baseURL = 'https://shikimori.one/api';
const defaultParams = {
  limit: '20',
  order: 'ranked'
}

export async function getPosts(params?: Record<string, string>) {
  const url = new URL(`${baseURL}/animes`);

  if (!params) {
    params = defaultParams
  }
  if (!params.limit) {
    params.limit = defaultParams.limit
  }
  if (!params.order) {
    params.order = defaultParams.order
  }


  url.search = new URLSearchParams(params).toString();
  
  const response = await fetch(url);

  return response.json()
}

export async function getPostById(id: string) {
  const url = new URL(`${baseURL}/animes/${id}`);
  const response = await fetch(url);

  return response.json()
}