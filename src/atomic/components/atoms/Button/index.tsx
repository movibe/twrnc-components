import { tailwind } from '@/src/libs/tailwind'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'

export type ButtonProps = {
  onPress?: () => void
  children: string
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tailwind('h-8 items-center justify-center rounded-md bg-indigo-400 px-2')]}
    >
      <Text style={[tailwind('font-bold text-white')]} numberOfLines={1}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
