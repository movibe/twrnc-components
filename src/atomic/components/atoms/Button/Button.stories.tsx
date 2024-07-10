import type { Meta } from '@storybook/react'

import { View } from 'react-native'

import { Button } from '.'

const meta = {
  argTypes: {
    onPress: { action: 'clicked' },
  },
  args: {
    children: 'Hello world',
  },
  component: Button,
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  title: 'Atoms/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
