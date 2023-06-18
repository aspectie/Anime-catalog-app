const baseURL = 'https://shikimori.one/api';

export async function getPosts(params: any) {
  const url = new URL(`${baseURL}/animes`);

  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);
  const data = await response.json();

  return data
}

export async function getPostById(id: string) {
  const url = new URL(`${baseURL}/animes/${id}`);
  const response = await fetch(url);
  const data = await response.json();

  return data
}