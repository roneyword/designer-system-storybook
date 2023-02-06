import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@designer-ui/react';

export default {
  title: 'Typograph/TextInput',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WhitPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com"
  }
}