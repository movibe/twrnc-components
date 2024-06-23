import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { UIProvider } from '../src/atomic/provider';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes'
import { withPerformance } from 'storybook-addon-performance';
export const parameters = {
  chromatic: { viewports: [360], pauseAnimationAtEnd: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex'
  },
  grid: {
    gridOn: false,
    columns: 4,
    gap: '16px',
    gutter: '16px',
    maxWidth: '1024px'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const withThemeProvider = (Story: any, context: any) => {
  return (
    <UIProvider>
      <Story {...context} />
    </UIProvider>
  )
}

export const decorators = [withThemeProvider, withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
}),
  withPerformance
]
export const tags = ['autodocs', 'autodocs'];
