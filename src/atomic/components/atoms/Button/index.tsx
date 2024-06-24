import { tailwind } from '@/src/libs/tailwind'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'
import { VariantProps } from 'tailwind-variants'
import { ButtonVariants } from './Button.variants'
import { assignTestId } from '@/src/utils/assignTestId'

type VariantsProps = VariantProps<typeof ButtonVariants>
export type ButtonProps = {
  testID?: string
  onPress?: () => void
  children: string
} & VariantsProps

export const Button = ({ onPress, children, testID = 'Button', variant }: ButtonProps) => {
  const { base, text } = ButtonVariants({ variant })
  return (
    <TouchableOpacity onPress={onPress} style={[tailwind(base())]} {...assignTestId('Button', testID)}>
      <Text style={[tailwind(text())]} numberOfLines={1}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
