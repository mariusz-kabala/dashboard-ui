import React, { FC } from 'react'
import { Badge } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import styles from './styles.scss'

export const SideBarLink: FC<{
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
  <NavLink to={route} onClick={onClick} activeClassName={styles.active}>
    <li className={styles.link}>
      {icon ? <span className={`${styles.icon} lnr lnr-${icon}`} /> : ''}
      <p className={styles.title}>
        {title}
        {newLink ? (
          <Badge className={styles.badge}>
            <span>New</span>
          </Badge>
        ) : (
          ''
        )}
      </p>
    </li>
  </NavLink>
)
