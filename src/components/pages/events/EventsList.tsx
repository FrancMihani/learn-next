import { EventListProps } from '@/types/events'
import EventItem from '@/components/pages/events/EventItem'
import classes from '@/components/pages/events/EventsList.module.css'
export default function EventList({ items }: EventListProps) {
  return (
    <ul className={classes.list}>
      {items.map(item => (
        <EventItem {...item} key={item.id} />
      ))}
    </ul>
  )
}
