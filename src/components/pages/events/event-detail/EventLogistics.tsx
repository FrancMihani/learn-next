import DateIcon from '@/components/icons/DateIcon'
import AddressIcon from '@/components/icons/AddressIcon'
import LogisticsItem from './LogisticsItem'
import classes from './EventLogistics.module.css'
import { formatLocation } from '@/utils/location'
import { formatDate } from '@/utils/date'

export default function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: Record<'date' | 'address' | 'image' | 'imageAlt', string>) {
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formatDate(date)}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formatLocation(address)}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}
