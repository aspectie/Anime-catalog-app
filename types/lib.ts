type TAnimesApiParams = {
  page?: number,
  limit?: string,
  order?: TOrderParam | string,
  kind?: TKindParam | string,
  status?: TStatusParam | string,
  season?: TSeasonParam | string,
  score?: number,
  duration?: TDurationParam | string,
  rating?: TRatingParam | string,
  genre?: string,
  studio?: string,
  franchise?: string,
  censored?: boolean,
  ids?: string,
  exclude_ids?: string,
  search?: string
}

type TOrderParam = 'id' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' | 'episodes' | 'status' | 'random'
type TKindParam = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48'
type TStatusParam = 'anons' | 'ongoing' | 'released'
type TSeasonParam = 'summer_2023' | 'winter_2023' | 'spring_2023' | 'fall_2023' | '2023' | '2022' | '2020_2021' | '2010_2014' | '2000_2010' | '199x' | '198x' | 'ancient'
type TDurationParam = 'S' | 'D' | 'F'
type TRatingParam = 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx'