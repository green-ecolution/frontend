import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/components/ui/input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "email",
    placeholder: "Email"
  },
};

