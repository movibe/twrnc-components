import { View } from 'react-native'

import { StorybookUIRoot } from '../../.ondevice'

import { tailwind } from '@/src/libs/tailwind'

export default function Page() {
  return (
    <View style={[tailwind('flex-1')]}>
      <StorybookUIRoot />
    </View>
  )
}
