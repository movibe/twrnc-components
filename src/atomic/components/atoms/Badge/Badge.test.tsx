import { mockTestID } from '@/src/utils/assignTestId'
import { render, screen } from '@/src/utils/wrapper'
import { BadgeProps, Badge } from './'

describe(`Badge/Badge`, () => {
  const props: BadgeProps = {
    testID: 'Badge',
    children: 'Badge',
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
