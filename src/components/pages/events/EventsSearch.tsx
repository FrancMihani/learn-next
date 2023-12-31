import { FormEvent, useRef } from 'react'
import Button from '@/components/buttons/Button'
import classes from './EventsSearch.module.css'

type Props = {
  onSearch: (selectedYear: string, selectedMonth: string) => void
}
type InputParams = { value: string }

export default function EventsSearch({ onSearch }: Props) {
  const month = useRef(null)
  const year = useRef(null)

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const selectedYear = year.current?.value as string
    const selectedMonth = month.current?.value as string

    onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={month}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}
