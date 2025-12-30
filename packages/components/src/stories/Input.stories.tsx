import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { FormExample } from './FormExample'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    required: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
}

export const File: Story = {
  args: {
    type: 'file',
    name: 'picture',
    label: 'Picture',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const WithLabel: Story = {
  args: {
    ...Default.args,
    required: true,
    label: 'Email',
  },
}

export const Form: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Email',
    required: true,
  },
  render: (args) => <FormExample {...args} />,
}
