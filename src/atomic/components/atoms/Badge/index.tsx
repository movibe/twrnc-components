import { View } from 'react-native'
import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'
import { VariantProps } from 'tailwind-variants'
import { BadgeVariants } from './Badge.variants'
import { Text } from '../Text'

type VariantTypes = VariantProps<typeof BadgeVariants>
export type BadgeProps = VariantTypes & {
  testID?: string
  children: string
}

export const Badge = ({ testID = 'Badge', variant, children, ...props }: BadgeProps) => {
  const { base, text } = BadgeVariants({ variant })
  return (
    <View {...assignTestId('View', testID)} style={[tailwind(base())]} {...props}>
      <Text style={[tailwind(text())]}>{children}</Text>
    </View>
  )
}
