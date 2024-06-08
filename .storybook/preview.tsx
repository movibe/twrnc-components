import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { UIProvider } from '../src/atomic/provider/UIProvider';

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
  actions: { argTypesRegex: '^on[A-Z].*' },
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
      </UIPro>
  )
}

export const decorators = [withThemeProvider]
