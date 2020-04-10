import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { SidebarLink } from '@dashboard-ui/sidebar-link'
import { SidebarCategory } from '../src'

export default {
  title: '@dashboard-ui/sidebar-category',
  component: SidebarCategory,
}

export const Default = () => (
  <BrowserRouter>
    <SidebarCategory title="Example Pages" icon="diamond">
      <SidebarLink
        title="Page one"
        route="/pages/one"
        onClick={action('clicked')}
      />
      <SidebarLink
        title="Page two"
        route="/pages/two"
        onClick={action('clicked')}
      />
    </SidebarCategory>
  </BrowserRouter>
)
