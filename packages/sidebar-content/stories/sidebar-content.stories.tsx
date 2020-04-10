import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SidebarLink } from '@dashboard-ui/sidebar-link'
import { SidebarCategory } from '@dashboard-ui/sidebar-category'
import { SidebarContentBlock } from '@dashboard-ui/sidebar-content-block'
import { SidebarContent } from '../src'

export default {
  title: '@dashboard-ui/sidebar-content',
  component: SidebarContent,
}

export const Default = () => (
  <BrowserRouter>
    <SidebarContent>
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
      <SidebarContentBlock>
        <SidebarCategory title="Example Pages" icon="diamond">
          <SidebarLink title="Page one" route="/pages/one" />
          <SidebarLink title="Page two" route="/pages/two" />
        </SidebarCategory>
      </SidebarContentBlock>
    </SidebarContent>
  </BrowserRouter>
)
