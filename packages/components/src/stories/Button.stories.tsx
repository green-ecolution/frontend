import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRightIcon, Loader2, MoveRight, Plus } from 'lucide-react'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Primary: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Zum Dashboard <MoveRight />
      </>
    ),
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
}

export const Link: Story = {
  args: {
    ...Default.args,
    variant: 'link',
  },
}

export const Icon: Story = {
  args: {
    ...Default.args,
    size: 'icon',
    children: <ChevronRightIcon />,
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Neue Gruppe erstellen <Plus />
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
    disabled: true,
    size: 'sm',
    children: (
      <>
        <Loader2 className="animate-spin" /> Please wait
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
