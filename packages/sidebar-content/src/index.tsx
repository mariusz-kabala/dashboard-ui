import React, { FC } from 'react'

export const SidebarContent: FC<{
  children: React.ReactNode
}> = ({ children }) => <div className="sidebar__content">{children}</div>
