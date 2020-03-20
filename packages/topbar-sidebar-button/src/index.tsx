import React, { FC } from 'react'

export const TopBarSidebarButton: FC<{
  onChangeSidebarVisibility: () => void
  onChangeMobileSidebarVisibility: () => void
  icon: string
}> = ({ onChangeSidebarVisibility, onChangeMobileSidebarVisibility, icon }) => (
  <div>
    <button
      type="button"
      className="topbar__button topbar__button--desktop"
      onClick={onChangeSidebarVisibility}
    >
      <img src={icon} alt="" className="topbar__button-icon" />
    </button>
    <button
      type="button"
      className="topbar__button topbar__button--mobile"
      onClick={onChangeMobileSidebarVisibility}
    >
      <img src={icon} alt="" className="topbar__button-icon" />
    </button>
  </div>
)
