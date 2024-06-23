import { tv } from 'tailwind-variants'

export const TextVariants = tv({
  defaultVariants: {
    variant: 'body',
  },
  slots: {
    text: '',
  },
  variants: {
    variant: {
      body: {
        text: 'text-base',
      },
      caption: {
        text: 'text-xs',
      },
      h1: {
        text: 'text-3xl',
      },
      h2: {
        text: 'text-2xl',
      },
      h3: {
        text: 'text-xl',
      },
      h4: {
        text: 'text-lg',
      },
      h5: {
        text: 'text-base',
      },
      h6: {
        text: 'text-sm',
      },
    },
  },
})
