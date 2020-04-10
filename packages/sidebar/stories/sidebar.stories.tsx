import React from 'react'
import { Sidebar } from '../src'
import { BrowserRouter } from 'react-router-dom'
import { SidebarLink } from '@dashboard-ui/sidebar-link'
import { SidebarCategory } from '@dashboard-ui/sidebar-category'
import { SidebarContentBlock } from '@dashboard-ui/sidebar-content-block'
import { SidebarContent } from '@dashboard-ui/sidebar-content'

export default {
  title: '@dashboard-ui/sidebar',
  component: Sidebar,
}

const Content = () => (
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
)

export const Default = () => (
  <BrowserRouter>
    <Sidebar
      isSidebarVisible={true}
      isSidebarCollapse={false}
      onChangeMobileSidebarVisibility={() => null}
    >
      <Content />
    </Sidebar>
  </BrowserRouter>
)

export const Collapsed = () => (
  <BrowserRouter>
    <Sidebar
      isSidebarVisible={true}
      isSidebarCollapse={true}
      onChangeMobileSidebarVisibility={() => null}
    >
      <Content />
    </Sidebar>
  </BrowserRouter>
)
