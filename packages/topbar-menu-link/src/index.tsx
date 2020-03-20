import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const TopBarMenuLink: FC<{
  title: string
  path: string
  icon: string
}> = ({ title, icon, path }) => (
  <Link className="topbar__link" to={path}>
    <span className={`topbar__link-icon lnr lnr-${icon}`} />
    <p className="topbar__link-title">{title}</p>
  </Link>
)
