---
name: "page"
root: "./src/app"
output: "*"
ignore: []
questions:
  name: "Please enter name"
---

# `{{ inputs.name }}.tsx`

```jsx
import { tailwind } from '@/src/libs/tailwind'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View style={[tailwind('flex-1 items-center p-4')]}>
      <View style={[tailwind('flex-1 justify-center')]}>
        <Text style={[tailwind('font-bold text-4xl')]}>Hello World</Text>
        <Text style={[tailwind('text-lg')]}>This is the first page of your app.</Text>
      </View>
    </View>
  )
}
```
