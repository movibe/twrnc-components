import { View } from 'react-native'
import { VariantProps } from 'tailwind-variants'

import { Text } from '../Text'

import { BadgeVariants } from './Badge.variants'

import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'

type VariantTypes = VariantProps<typeof BadgeVariants>
export type BadgeProps = VariantTypes & {
  testID?: string
  children: string
}

export const Badge = ({ children, testID = 'Badge', variant, ...props }: BadgeProps) => {
  const { base, text } = BadgeVariants({ variant })
  return (
    <View {...assignTestId('View', testID)} style={[tailwind(base())]} {...props}>
      <Text style={[tailwind(text())]}>{children}</Text>
    </View>
  )
}
