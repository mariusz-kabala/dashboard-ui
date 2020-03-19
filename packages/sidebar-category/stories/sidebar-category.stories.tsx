import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { SideBarLink } from '@dashboard-ui/sidebar-link'
import { SideBarCategory } from '../src'

export default {
  title: '@dashboard-ui/sidebar-category',
  component: SideBarCategory,
}

export const Default = () => (
  <BrowserRouter>
    <SideBarCategory title="Example Pages" icon="diamond">
      <SideBarLink
        title="Page one"
        route="/pages/one"
        onClick={action('clicked')}
      />
      <SideBarLink
        title="Page two"
        route="/pages/two"
        onClick={action('clicked')}
      />
    </SideBarCategory>
  </BrowserRouter>
)
