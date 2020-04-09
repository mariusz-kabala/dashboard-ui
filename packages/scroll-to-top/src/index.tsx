import React, { ReactNode, FC, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { usePrevious } from '@dashboard-ui/hooks'

const ScrollToTopInner: FC<RouteComponentProps & {
  children: ReactNode
}> = ({ children, location }) => {
  const prev: any = usePrevious({ location })

  useEffect(() => {
    if (prev && location.pathname !== prev.location?.pathname) {
      window.scrollTo(0, 0)
    }
  })
  return <>{children}</>
}

export const ScrollToTop = withRouter(ScrollToTopInner)
