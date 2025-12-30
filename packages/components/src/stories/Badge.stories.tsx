import { Badge } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}
