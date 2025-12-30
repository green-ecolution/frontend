import Notice from '@/components/notice'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TriangleAlert } from 'lucide-react'

const meta = {
  title: 'Notice',
  component: Notice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Hinweis: Dieser Baum ist nicht mit einem Sensor ausgestattet.',
    description:
      'Dieser Baum wurde bisher nicht mit einem Sensor ausgestattet, sodass keine Informationen über den aktuellen Bewässerungszustand angezeigt werden können. Aus diesem Grund wird der Bewässerungszustand als unbekannt ausgezeichnet.',
  },
} satisfies Meta<typeof Notice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Destructive: Story = {
  args: {
    icon: <TriangleAlert />,
    variant: 'destructive',
    title: 'Baumgruppe ohne Bäume!',
    description: 'Diese Baumgruppe enthält keine Bäume und hat daher keinen Standort.',
  },
}
