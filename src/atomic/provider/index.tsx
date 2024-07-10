import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { ReactNode } from 'react'
import { useColorScheme, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { tailwind } from '@/src/libs/tailwind'

export type UIProviderProps = {
  children: ReactNode
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const colorScheme = useColorScheme()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={[tailwind('bg-background dark:bg-black')]}>{children}</View>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
