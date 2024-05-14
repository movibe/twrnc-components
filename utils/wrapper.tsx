import { render as baseRender } from '@testing-library/react-native'

export * from '@testing-library/react-native'
// re-export everything
export * from './assignTestId'

export function wrapper({ children }: { children: React.ReactNode }) {
  return children
}

export const render = (ui: React.ReactElement, options?: any) => {
  return baseRender(ui, { wrapper, ...options })
}
