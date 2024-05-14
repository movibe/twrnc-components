---
name: "component"
root: "./atomic/components"
output: "*"
ignore: []
questions:
  name: "Please enter name"
---

# `{{ inputs.name | pascal }}/index.tsx`

```jsx
import { View } from 'react-native'
import {tailwind} from '@/libs/tailwind'
import {assignTestId} from '@/utils/assignTestId'

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

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```jsx
import type { Meta, StoryObj } from '@storybook/react'
import { {{ inputs.name | pascal }}, {{ inputs.name | pascal }}Props } from './index'

const meta: Meta<{{ inputs.name | pascal }}Props> = {
  argTypes: {
  },
  component: {{ inputs.name | pascal }},
  title: 'Component/{{ inputs.name | pascal }}'
}

export default meta

type Story = StoryObj<{{ inputs.name | pascal }}Props>

export const Basic: Story = {
  args: {
  },
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```jsx
import {mockTestID} from '@/utils/assignTestId'
import {render, screen} from '@/utils/wrapper'
import { {{ inputs.name | pascal }}Props, {{ inputs.name | pascal }}} from './'

describe(`{{ inputs.name | pascal }}`, () => {

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
