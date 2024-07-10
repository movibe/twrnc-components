import { Badge, BadgeProps } from './'

import { mockTestID } from '@/src/utils/assignTestId'
import { render, screen } from '@/src/utils/wrapper'

describe(`Badge/Badge`, () => {
  const props: BadgeProps = {
    children: 'Badge',
    testID: 'Badge',
  }

  const el_container = mockTestID('View', props.testID!)

  it(`render component #${el_container}`, async () => {
    render(<Badge {...props} />)
    const sut = await screen.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it(`render children`, async () => {
    render(<Badge {...props} />)
    const sut = await screen.findByText(props.children)
    expect(sut.children.join('')).toEqual(props.children)
  })
})
