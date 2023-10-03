import classes from './ErrorAlert.module.css'
import { PropsWithChildren } from 'react'

export default function ErrorAlert({ children }: PropsWithChildren) {
  return <div className={classes.alert}>{children}</div>
}
