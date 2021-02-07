import React from 'react'
import renderer from 'react-test-renderer'

import MyButton from './MyButton'

describe('<MyButton />', () => {
  it('Renders', () => {
    const Button = renderer.create(
      <MyButton>
        Hello
      </MyButton>
    )

    expect(Button).toMatchSnapshot()
  })
})
