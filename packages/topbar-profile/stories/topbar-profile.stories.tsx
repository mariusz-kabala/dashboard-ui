import React from 'react'
import { TopbarProfile } from '../src'
import { BrowserRouter } from 'react-router-dom'
import { TopbarMenuLink } from '@dashboard-ui/topbar-menu-link'

export default {
  title: '@dashboard-ui/topbar-profile',
  component: TopbarProfile,
}

export const Default = () => (
  <BrowserRouter>
    <TopbarProfile
      username="Username"
      avatar="https://via.placeholder.com/35x35"
      menu={
        <>
          <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
          <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink title="Log Out" icon="exit" path="/" />
        </>
      }
    />
  </BrowserRouter>
)
