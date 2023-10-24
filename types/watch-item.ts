import { TAnimeItem } from "./anime-item";

export type TWatchItem = {
  id: number;
  userId: string;
  watchId: number;
  status: TWatchStatus;
}

export type TWatchStatus = 'watched' | 'watching' | 'planned' | 'rewatching' | 'dropped' | 'on_hold'

export type TWatchRecord = TAnimeItem & { watchStatus: TWatchStatus }
