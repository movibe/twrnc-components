import { tv } from 'tailwind-variants'

export const ButtonVariants = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    base: 'h-8 items-center justify-center rounded-md px-2',
    text: 'font-bold text-white',
  },

  variants: {
    variant: {
      default: {
        base: 'border-transparent bg-primary text-primary hover:bg-primary/80',
        text: '',
      },
      destructive: {
        base: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        text: '',
      },
      outline: {
        base: 'border-primary',
        text: 'text-primary',
      },
      secondary: {
        base: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        text: '',
      },
    },
  },
})
