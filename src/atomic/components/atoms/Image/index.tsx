import { Image as Base, ImageProps as Props } from 'expo-image'

import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'

export type ImageProps = Props & {
  testID?: string
}

export const Image = ({ testID = 'Image', ...props }: ImageProps) => {
  return <Base style={[tailwind('border border-gray-100')]} {...assignTestId('View', testID)} {...props} />
}
