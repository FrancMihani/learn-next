import classes from './EventContent.module.css'
import { PropsWithChildren } from 'react'

export default function EventContent({ children }: PropsWithChildren) {
  return <section className={classes.content}>{children}</section>
}
