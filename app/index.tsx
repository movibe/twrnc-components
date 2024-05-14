import { tailwind } from '@/libs/tailwind'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View style={[tailwind('flex-1 items-center p-4')]}>
      <View style={[tailwind('flex-1 justify-center')]}>
        <Text style={[tailwind('font-bold text-4xl')]}>Hello World</Text>
        <Text style={[tailwind('text-lg')]}>This is the first page of your app.</Text>

        <Link href='/storybook' style={[tailwind('my-4 bg-slate-200 items-center justify-center p-4')]}>
          Storybook
        </Link>
      </View>
    </View>
  )
}
