import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { Button, ButtonProps } from '.'
import { mockTestID } from '@/src/utils/assignTestId'

describe('Button', () => {
  const props: ButtonProps = {
    testID: 'Button',
    children: 'Hello world',
    onPress: jest.fn(),
  }
  const el_container = mockTestID('Button', props.testID!)

  it(`render component #${el_container}`, async () => {
    render(<Button {...props} />)
    const sut = await screen.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it(`render children`, async () => {
    render(<Button {...props} />)
    const sut = await screen.findByText(props.children)
    expect(sut.children.join('')).toEqual(props.children)
  })

  it(`onPress`, async () => {
    render(<Button {...props} />)
    const sut = await screen.findByTestId(el_container)
    fireEvent.press(sut)
    expect(props.onPress).toHaveBeenCalled()
  })
})
