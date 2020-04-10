import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Topbar } from '../src'
import { action } from '@storybook/addon-actions'
import { BurgerIcon } from '@dashboard-ui/icons'
import { TopbarSidebarButton } from '@dashboard-ui/topbar-sidebar-button'
import { TopbarProfile } from '@dashboard-ui/topbar-profile'
import { TopbarMenuLink } from '@dashboard-ui/topbar-menu-link'

export default {
  title: '@dashboard-ui/topbar',
  component: Topbar,
}

export const Default = () => (
  <BrowserRouter>
    <Topbar
      Button={
        <TopbarSidebarButton
          Icon={<BurgerIcon />}
          onChangeSidebarVisibility={action('onChangeSidebarVisibility')}
          onChangeMobileSidebarVisibility={action(
            'onChangeMobileSidebarVisibility'
          )}
        />
      }
      Profile={
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
      }
      url="/"
    />
  </BrowserRouter>
)
