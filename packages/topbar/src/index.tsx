import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Topbar: FC<{
  Button: React.ReactNode
  Profile: React.ReactNode
  url?: string
}> = ({ Button, Profile, url = '/' }) => (
  <div className="topbar">
    <div className="topbar__wrapper">
      <div className="topbar__left">
        {Button}
        <Link className="topbar__logo" to={url} />
      </div>
      <div className="topbar__right">{Profile}</div>
    </div>
  </div>
)
