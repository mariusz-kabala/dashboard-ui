import React, { FC } from 'react'

export const TopbarSidebarButton: FC<{
  onChangeSidebarVisibility: () => void
  onChangeMobileSidebarVisibility: () => void
  Icon: React.ReactNode
}> = ({ onChangeSidebarVisibility, onChangeMobileSidebarVisibility, Icon }) => (
  <div>
    <button
      type="button"
      className="topbar__button topbar__button--desktop"
      onClick={onChangeSidebarVisibility}
    >
      {Icon}
    </button>
    <button
      type="button"
      className="topbar__button topbar__button--mobile"
      onClick={onChangeMobileSidebarVisibility}
    >
      {Icon}
    </button>
  </div>
)
