import React from 'react'
import { SidebarContentBlock } from '../src'
import { BrowserRouter } from 'react-router-dom'
import { SidebarLink } from '@dashboard-ui/sidebar-link'
import { SidebarCategory } from '@dashboard-ui/sidebar-category'

export default {
  title: '@dashboard-ui/sidebar-content-block',
  component: SidebarContentBlock,
}

export const Default = () => (
  <BrowserRouter>
    <SidebarContentBlock>
      <SidebarLink title="Log In" icon="exit" route="/log_in" />
      <SidebarCategory title="Layout" icon="layers">
        <button type="button" className="sidebar__link">
          <p className="sidebar__link-title">Light Theme</p>
        </button>
        <button type="button" className="sidebar__link">
          <p className="sidebar__link-title">Dark Theme</p>
        </button>
      </SidebarCategory>
    </SidebarContentBlock>
  </BrowserRouter>
)
