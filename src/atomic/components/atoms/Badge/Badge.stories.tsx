import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from './index'

const meta: Meta<BadgeProps> = {
  argTypes: {},
  component: Badge,
  title: 'Atoms/Badge',
}

export default meta

type Story = StoryObj<BadgeProps>

export const Basic: Story = {
  args: {
    children: 'Badge',
  },
}
