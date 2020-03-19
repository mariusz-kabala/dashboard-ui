import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SideBarLink } from '../src'

export default {
  title: '@dashboard-ui/sidebar-link',
  component: SideBarLink,
}

export const Default = () => (
  <BrowserRouter>
    <SideBarLink title="Example link" />
  </BrowserRouter>
)

export const WithIcon = () => (
  <BrowserRouter>
    <SideBarLink title="Log Out" icon="exit" route="/log_in" />
  </BrowserRouter>
)

export const NewLink = () => (
  <BrowserRouter>
    <SideBarLink newLink={true} title="New stuff" icon="exit" route="/new" />
  </BrowserRouter>
)
