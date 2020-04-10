import React, { FC } from 'react'

export const SidebarContentBlock: FC<{
  children: React.ReactNode
}> = ({ children }) => <ul className="sidebar__block">{children}</ul>
