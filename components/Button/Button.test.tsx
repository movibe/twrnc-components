import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from './Button'

describe('MyButton', () => {
  it('renders correctly with given text', () => {
    const { getByText } = render(<Button text="Click me" onPress={() => {}} />)
    expect(getByText('Click me')).toBeTruthy()
  })

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Button text="Click me" onPress={onPressMock} />)
    fireEvent.press(getByText('Click me'))
    expect(onPressMock).toHaveBeenCalled()
  })
})
