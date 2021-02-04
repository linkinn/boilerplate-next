import { Story, Meta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Title Basic',
  description: 'Description Basic'
}

export const Default: Story = (args) => <Main {...args} />
