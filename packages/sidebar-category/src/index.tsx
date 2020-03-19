import React, { FC, ReactNode, useState } from 'react'
import { Collapse } from 'reactstrap'
import classNames from 'classnames'
import styles from './styles.scss'

export const SideBarCategory: FC<{
  title: string
  icon?: string
  isNew?: boolean
  children: ReactNode
}> = ({ title, children, icon = '', isNew = false }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <div
      className={classNames({
        [styles.wrap]: true,
        [styles.wrapOpen]: isCollapsed,
      })}
    >
      <button
        type="button"
        className={`${styles.link} sidebar__category`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {icon ? <span className={`${styles.icon} lnr lnr-${icon}`} /> : ''}
        <p className={styles.title}>
          {title}
          {isNew && <span className={styles.isNew} />}
        </p>
        <span className={`${styles.categoryIcon} lnr lnr-chevron-right`} />
      </button>
      <Collapse isOpen={isCollapsed} className={styles.submenuWrap}>
        <ul className={styles.submenu}>
          <div>{children}</div>
        </ul>
      </Collapse>
    </div>
  )
}
