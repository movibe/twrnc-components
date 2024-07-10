import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { useAppColorScheme, useDeviceContext } from 'twrnc'

import { tw } from '../libs/tailwind'

export default function RootLayout() {
  useDeviceContext(tw)

  // 3️⃣  use the `useAppColorScheme` hook anywhere to get a reference to the current
  // colorscheme, with functions to modify it (triggering re-renders) when you need
  useAppColorScheme(tw)

  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
    </ThemeProvider>
  )
}
