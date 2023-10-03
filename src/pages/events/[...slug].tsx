import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/data/dummy-data'
import EventList from '@/components/pages/events/EventsList'
import ResultsTitle from '@/components/pages/events/ResultsTitle'
import Button from '@/components/buttons/Button'
import ErrorAlert from '@/components/pages/events/ErrorAlert'

export default function FilteredEvents() {
  const { query } = useRouter()

  if (!query.slug) return <p className="center">Loading...</p>

  const [stringYear, stringMonth] = query.slug
  const year = +stringYear
  const month = +stringMonth

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12)
    return (
      <ErrorAlert>
        <p>Invalid filters. Please adjust your values!</p>
      </ErrorAlert>
    )

  const filteredEvents = getFilteredEvents({ year, month })

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    )

  const date = new Date(year, month - 1)

  return (
    <Fragment>
      <ResultsTitle date={date as string} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}
