---
name: 'component'
root: './src/atomic/components'
output: '*'
ignore: []
questions:
  type:
    message: 'Select type'
    choices:
      - 'atom'
      - 'molecule'
      - 'organism'
      - 'template'
  name: 'Please enter name'
  variant:
    confirm: 'Include Variants?'
    initial: false
---

# `{{ inputs.variant && '!' }}{{ inputs.name | pascal }}/index.tsx`

```typescript
import { View } from 'react-native'
import {tailwind} from '@/src/libs/tailwind'
import {assignTestId} from '@/src/utils/assignTestId'

export type {{ inputs.name | pascal }}Props = {
  testID?: string
}

export const {{ inputs.name | pascal }} =  ({
  testID = '{{ inputs.name | pascal }}',
  ...props
}: {{ inputs.name | pascal }}Props) => {

  return (<View {...assignTestId('View', testID)} {...props}></View>)
}

```

# `{{ !inputs.variant && '!' }}{{ inputs.type }}s/{{ inputs.name | pascal }}/index.tsx`

```typescript
import { View } from 'react-native'
import { tailwind } from '@/src/libs/tailwind'
import { assignTestId } from '@/src/utils/assignTestId'
import { VariantProps } from 'tailwind-variants'
import { {{ inputs.name | pascal }}Variants } from './{{ inputs.name | pascal }}.variants'

type VariantTypes = VariantProps<typeof {{ inputs.name | pascal }}Variants>
export type {{ inputs.name | pascal }}Props = {
  testID?: string
} & VariantTypes

export const {{ inputs.name | pascal }} = ({ testID = '{{ inputs.name | pascal }}', variant, ...props }: {{ inputs.name | pascal }}Props) => {
  const { base } = {{ inputs.name | pascal }}Variants({ variant })
  return <View {...assignTestId('View', testID)} style={[tailwind(base())]} {...props}></View>
}


```

# `{{ inputs.type }}s/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { {{ inputs.name | pascal }}, {{ inputs.name | pascal }}Props } from './index'

const meta: Meta<{{ inputs.name | pascal }}Props> = {
  argTypes: {
  },
  component: {{ inputs.name | pascal }},
  title: '{{ inputs.type | pascal }}s/{{ inputs.name | pascal }}'
}

export default meta

type Story = StoryObj<{{ inputs.name | pascal }}Props>

export const Basic: Story = {
  args: {
  },
}

```

# `{{ inputs.type }}s/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import {mockTestID} from '@/src/utils/assignTestId'
import {render, screen} from '@/src/utils/wrapper'
import { {{ inputs.name | pascal }}Props, {{ inputs.name | pascal }}} from './'

describe(`{{ inputs.type | pascal }}s/{{ inputs.name | pascal }}`, () => {

  const props: {{ inputs.name | pascal }}Props = {
    testID: '{{ inputs.name | pascal }}',
  }

  const el_container = mockTestID('View', props.testID!)

  it(`render component #${el_container}`, async () => {
   render(<{{ inputs.name | pascal }} {...props} />)
    const sut = await screen.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })
})

```

# `{{ inputs.type }}s/{{ !inputs.variant && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.variants.ts`

```typescript
import { tv } from 'tailwind-variants'

export const {{ inputs.name | pascal }}Variants = tv({
  defaultVariants: {
    variant: 'body',
  },
  slots: {
    base: '',
  },
  variants: {
    variant: {
      body: {
        base: 'text-base',
      },
    },
  },
})
```
