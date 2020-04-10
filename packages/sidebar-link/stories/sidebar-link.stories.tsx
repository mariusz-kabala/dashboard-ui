import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SidebarLink } from '../src'

export default {
  title: '@dashboard-ui/sidebar-link',
  component: SidebarLink,
}

export const Default = () => (
  <BrowserRouter>
    <SidebarLink title="Example link" />
  </BrowserRouter>
)

export const WithIcon = () => (
  <BrowserRouter>
    <SidebarLink title="Log Out" icon="exit" route="/log_in" />
  </BrowserRouter>
)

export const NewLink = () => (
  <BrowserRouter>
    <SidebarLink newLink={true} title="New stuff" icon="exit" route="/new" />
  </BrowserRouter>
)
