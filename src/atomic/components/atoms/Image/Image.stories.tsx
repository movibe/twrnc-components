import type { Meta } from '@storybook/react'

import { Image } from '.'

const meta = {
  component: Image,
  title: 'Atoms/Image',
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    contentFit: 'cover',
    source: 'https://picsum.photos/seed/696/3000/2000',
    style: { height: 200, width: 300 },
    transition: 1000,
  },
}
