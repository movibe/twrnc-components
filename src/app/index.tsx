import { tailwind } from '@/src/libs/tailwind'
import { View } from 'react-native'
import { StorybookUIRoot } from '../../.ondevice'
export default function Page() {
  return (
    <View style={[tailwind('flex-1')]}>
      <StorybookUIRoot />
    </View>
  )
}
