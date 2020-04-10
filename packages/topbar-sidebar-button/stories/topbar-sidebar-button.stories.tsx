import React from 'react'
import { TopbarSidebarButton } from '../src'
import { BurgerIcon } from '@dashboard-ui/icons'
import { action } from '@storybook/addon-actions'

export default {
  title: '@dashboard-ui/topbar-sidebar-button',
  component: TopbarSidebarButton,
}

export const Default = () => (
  <TopbarSidebarButton
    Icon={<BurgerIcon />}
    onChangeSidebarVisibility={action('onChangeSidebarVisibility')}
    onChangeMobileSidebarVisibility={action('onChangeMobileSidebarVisibility')}
  />
)
