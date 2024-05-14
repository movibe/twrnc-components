import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from '.'

describe('Button', () => {
  it('renders correctly with given text', () => {
    const { getByText } = render(<Button onPress={() => {}}>Click me</Button>)
    expect(getByText('Click me')).toBeTruthy()
  })

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Button onPress={onPressMock}>Click me</Button>)
    fireEvent.press(getByText('Click me'))
    expect(onPressMock).toHaveBeenCalled()
  })
})
