import { TEventItem } from '@/types/events'
import { formatDate } from '@/utils/date'
import { formatLocation } from '@/utils/location'
import Button from '@/components/buttons/Button'
import classes from '@/components/pages/events/EventItem.module.css'
import DateIcon from '@/components/icons/DateIcon'
import AddressIcon from '@/components/icons/AddressIcon'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'

export default function EventItem({ title, image, date, location, id }: TEventItem) {
  const link = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formatDate(date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatLocation(location)}</address>
          </div>
          <div className={classes.actions}>
            <Button link={link}>
              Explore Event
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}
