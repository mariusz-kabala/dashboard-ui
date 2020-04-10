import React, { FC, ReactNode } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import classNames from 'classnames'

export const Sidebar: FC<{
  onChangeMobileSidebarVisibility: () => void
  isSidebarVisible: boolean
  isSidebarCollapse: boolean
  children: ReactNode
}> = ({
  onChangeMobileSidebarVisibility,
  isSidebarVisible,
  isSidebarCollapse,
  children,
}) => {
  return (
    <div
      className={classNames({
        sidebar: true,
        'sidebar--show': isSidebarVisible,
        'sidebar--collapse': isSidebarCollapse,
      })}
    >
      <button
        type="button"
        className="sidebar__back"
        onClick={onChangeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          {children}
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          {children}
        </div>
      </Scrollbar>
    </div>
  )
}
