import { Text, TextProps } from './'

import { mockTestID } from '@/src/utils/assignTestId'
import { render, screen } from '@/src/utils/wrapper'

describe(`Text`, () => {
  const props: TextProps = {
    children: 'Hello World!',
    testID: 'Text',
  }

  const el_container = mockTestID('View', props.testID!)

  it(`render component #${el_container}`, async () => {
    render(<Text {...props} />)
    const sut = await screen.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it(`render children`, async () => {
    render(<Text {...props} />)
    const sut = await screen.findByText(props.children)
    expect(sut.children.join('')).toEqual(props.children)
  })
})
