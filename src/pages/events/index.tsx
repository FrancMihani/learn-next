import { Fragment } from 'react'
import { getAllEvents } from '@/data/dummy-data'
import EventList from '@/components/pages/events/EventsList'
import EventsSearch from '@/components/pages/events/EventsSearch'
import { useRouter } from 'next/router'

export default function Events() {
  const allEvents = getAllEvents()
  const { push } = useRouter()
  const findEventsHandler = async (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`
    await push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  )
}
