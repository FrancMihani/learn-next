import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import classes from '@/components/buttons/Button.module.css'
export default function Button({
  children,
  link,
  onClick,
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { link?: string }) {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  )
}
