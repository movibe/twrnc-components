import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react";
import { UIProvider } from '../src/atomic/provider/UIProvider';
import React from "react";


const withThemeProvider = (Story: any, context: any) => {
  return (
      <UIProvider>
        <Story {...context} />
      </UIProvider>
  )
}



const preview: Preview = {
  decorators: [withBackgrounds, withThemeProvider],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export default preview;
