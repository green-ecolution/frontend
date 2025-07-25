import DashboardCard from '@/components/cards/dashboard'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Dashboard Card',
  component: DashboardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    headline: 'Karte',
    description: 'Alle Bäume in Flensburg im Zuständigkeitsbereich des TBZ',
    linkLabel: 'Zur Karte',
    theme: 'dark',
  },
} satisfies Meta<typeof DashboardCard>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
  },
}

export const White: Story = {
  args: {
    theme: 'white',
  },
}
