import { useRouter } from 'next/router'
import { getEventById } from '@/data/dummy-data'
import { Fragment } from 'react'
import EventSummary from '@/components/pages/events/event-detail/EventSummary'
import EventLogistics from '@/components/pages/events/event-detail/EventLogistics'
import EventContent from '@/components/pages/events/event-detail/EventContent'
import { TEventItem } from '@/types/events'
import ErrorAlert from '@/components/pages/events/ErrorAlert'

export default function Event() {
  const { query } = useRouter()

  const event = getEventById(query.id as string) as TEventItem
  if (!event)
    return (
      <ErrorAlert>
        <p>No Event found!</p>
      </ErrorAlert>
    )

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics image={event.image} address={event.location} date={event.date} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}
