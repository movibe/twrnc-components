/* eslint-disable @typescript-eslint/no-var-requires */
import { create } from 'twrnc'

import tailwindConfig from '../../../tailwind.config'

export type TailwindColor = keyof typeof tailwindConfig.theme.extend.colors

export const tw = create(tailwindConfig)
export const tailwind = tw.style
export const twColor = (color: TailwindColor) => tw.color(color)
