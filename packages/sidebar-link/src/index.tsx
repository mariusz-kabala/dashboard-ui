import React, { FC } from 'react'
import { Badge } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export const SidebarLink: FC<{
  title: string
  icon?: string
  newLink?: boolean
  route?: string
  onClick?: () => void
}> = ({
  title,
  icon = '',
  newLink = false,
  route = '/',
  onClick = () => null,
}) => (
  <NavLink to={route} onClick={onClick} activeClassName="sidebar__link-active">
    <li className="sidebar__link">
      {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
      <p className="sidebar__link-title">
        {title}
        {newLink ? (
          <Badge className="sidebar__link-badge">
            <span>New</span>
          </Badge>
        ) : (
          ''
        )}
      </p>
    </li>
  </NavLink>
)
