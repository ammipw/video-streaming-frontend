import type { Meta, StoryObj } from '@storybook/react-vite';
import VideoPreview from '.';

const meta = {
  title: 'Components/VideoPreview',
  component: VideoPreview,
} satisfies Meta<typeof VideoPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Video Title",
  }
};

export const AllVariants: Story = {
  args: {
    title: "All Variants",
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="flex flex-col gap-6 items-start">
      <VideoPreview {...args} title="Small" variant="small" />
      <VideoPreview {...args} title="Medium" variant="medium" />
      <VideoPreview {...args} title="Large" variant="large" />
    </div>
  ),
};