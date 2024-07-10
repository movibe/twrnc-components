import { tv } from 'tailwind-variants'

export const BadgeVariants = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    base: 'min-h-6 items-center justify-center rounded-full border text-xs font-semibold',
    text: 'font-bold text-white',
  },

  variants: {
    variant: {
      danger: {
        base: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        text: '',
      },
      default: {
        base: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
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
