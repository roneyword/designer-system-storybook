import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@designer-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text as="span">Testando o elemento Box</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}