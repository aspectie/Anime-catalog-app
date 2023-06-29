export type TAnimeItem = {
  id: number,
  released_on: string,
  name: string,
  image?: TImage,
  russian?: string,
  genres?: Array<TGenre>,
  episodes?: string,
  kind?: string,
  status?: string,
  score?: string,
  licensors?: Array<string>,
  description?: string
}

export type TGenre = { 
  id: number, 
  name: string,
  russian: string,
  kind: string | null
}

export type TImage = {
  original: string,
  preview: string,
  x96: string,
  x48: string
}