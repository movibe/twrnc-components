import { Image, ImageProps } from './'

import { mockTestID } from '@/src/utils/assignTestId'
import { render, screen } from '@/src/utils/wrapper'

describe(`Image/Image`, () => {
  const props: ImageProps = {
    testID: 'Image',
    source: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  }

  const el_container = mockTestID('Image', props.testID!)

  it(`render component #${el_container}`, async () => {
    render(<Image {...props} />)
    const sut = await screen.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })
})
