import { tailwind } from '@/libs/tailwind'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export type ButtonProps = {
  onPress?: () => void
  children: string
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tailwind('px-2 h-8 rounded-md  bg-indigo-400 justify-center items-center')]}
    >
      <Text style={[tailwind('text-white font-bold')]}>{children}</Text>
    </TouchableOpacity>
  )
}
