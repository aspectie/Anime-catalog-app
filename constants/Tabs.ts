import { TWatchStatus } from "@/types/watch-item";
import { TTab } from "@/types/ui";

export const watchItemsTabs: TTab<{ value: TWatchStatus; title: string }>[] = [
  {
    value: 'watched',
    title: 'Watched'
  },
  {
    value: 'watching',
    title: 'Watching'
  },
  {
    value: 'planned',
    title: 'Planned'
  },
  {
    value: 'rewatching',
    title: 'Rewatching'
  },
  {
    value: 'dropped',
    title: 'Dropped'
  },
  {
    value: 'on_hold',
    title: 'On hold'
  }
]