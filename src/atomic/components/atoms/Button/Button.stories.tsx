import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import { Button } from '.'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Hello world',
  },
  argTypes: {
    onPress: { action: 'clicked' },
  },
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
