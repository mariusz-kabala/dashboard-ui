import React, { useState, FC, ReactNode } from 'react'
import DownIcon from 'mdi-react/ChevronDownIcon'
import { Collapse } from 'reactstrap'

export const TopbarProfile: FC<{
  username: string
  avatar: string
  menu: ReactNode
}> = ({ username, menu, avatar }) => {
  const [collapse, setCollapse] = useState<boolean>(false)
  return (
    <div className="topbar__profile">
      <button
        type="button"
        className="topbar__avatar"
        onClick={() => setCollapse(!collapse)}
      >
        <img className="topbar__avatar-img" src={avatar} alt="avatar" />
        <p className="topbar__avatar-name">{username}</p>
        <DownIcon className="topbar__icon" />
      </button>
      {collapse && (
        <button
          type="button"
          className="topbar__back"
          onClick={() => setCollapse(!collapse)}
        />
      )}
      <Collapse isOpen={collapse} className="topbar__menu-wrap">
        <div className="topbar__menu">{menu}</div>
      </Collapse>
    </div>
  )
}
