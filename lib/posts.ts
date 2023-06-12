import axios from "axios";

const api = axios.create({
  baseURL: 'https://shikimori.one/api',
});

export async function getPosts(params: any) {
  const {data} = await api.get('animes', {params})

  return data
}