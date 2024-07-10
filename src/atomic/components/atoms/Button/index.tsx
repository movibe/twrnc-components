import { TouchableOpacity } from 'react-native'
import { VariantProps } from 'tailwind-variants'

import { Text } from '../Text'

import { ButtonVariants } from './Button.variants'

import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'

type VariantsProps = VariantProps<typeof ButtonVariants>
export type ButtonProps = {
  testID?: string
  onPress?: () => void
  children: string
} & VariantsProps

export const Button = ({ children, onPress, testID = 'Button', variant }: ButtonProps) => {
  const { base, text } = ButtonVariants({ variant })
  return (
    <TouchableOpacity onPress={onPress} style={[tailwind(base())]} {...assignTestId('Button', testID)}>
      <Text numberOfLines={1} style={[tailwind(text())]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
