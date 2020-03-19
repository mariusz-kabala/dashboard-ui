import React from 'react'
import { render } from '@testing-library/react'
import { ProgressCircle } from './index'

describe('<ProgressCircle />', () => {
  it('Should be on the page', () => {
    const { getByTestId } = render(
      <ProgressCircle
        Icon={<span />}
        title="Calories burn"
        subTitle="Goal: 500 kKal"
        value={360}
        unit="kKal"
        color="f6da6e"
      />
    )

    expect(getByTestId('progress-circle')).toBeInTheDocument()
  })
})
