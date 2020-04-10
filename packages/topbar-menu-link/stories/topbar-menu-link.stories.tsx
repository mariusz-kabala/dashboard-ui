import React from 'react'
import { TopbarMenuLink } from '../src'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: '@dashboard-ui/topbar-menu-link',
  component: TopbarMenuLink,
}

export const Default = () => (
  <BrowserRouter>
    <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
    <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
    <div className="topbar__menu-divider" />
    <TopbarMenuLink title="Log Out" icon="exit" path="/" />
  </BrowserRouter>
)
