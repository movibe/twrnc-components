import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'
import { Text as Base, TextProps as Props } from 'react-native'
import { VariantProps } from 'tailwind-variants'
import { TextVariants } from './variants'

type VariantTypes = VariantProps<typeof TextVariants>

export type TextProps = Props & {
  testID?: string
  children: string
} & VariantTypes

export const Text = ({ testID = 'Text', variant, style, children, ...props }: TextProps) => {
  const { text } = TextVariants({ variant })
  return (
    <Base {...assignTestId('View', testID)} style={[{ includeFontPadding: false }, tailwind(text()), style]} {...props}>
      {children}
    </Base>
  )
}
