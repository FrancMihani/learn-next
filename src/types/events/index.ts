export type EventListProps = {
  items: Array<TEventItem>
}

export type TEventItem = {
  id: string
  title: string
  description: string
  location: string
  date: string
  image: string
  isFeatured: boolean
}
