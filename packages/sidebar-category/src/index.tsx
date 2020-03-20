import React, { FC, ReactNode, useState } from 'react'
import { Collapse } from 'reactstrap'
import classNames from 'classnames'

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
        'sidebar__category-wrap': true,
        'sidebar__category-wrap--open': isCollapsed,
      })}
    >
      <button
        type="button"
        className="sidebar__link sidebar__category"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
        <p className="sidebar__link-title">
          {title}
          {isNew && <span className="sidebar__category-new" />}
        </p>
        <span className="sidebar__category-icon lnr lnr-chevron-right" />
      </button>
      <Collapse isOpen={isCollapsed} className="sidebar__submenu-wrap">
        <ul className="sidebar__submenu">
          <div>{children}</div>
        </ul>
      </Collapse>
    </div>
  )
}
