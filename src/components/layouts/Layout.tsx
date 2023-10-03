import { Fragment, PropsWithChildren } from 'react'
import MainHeader from '@/components/layouts/MainHeader'
export default function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}
