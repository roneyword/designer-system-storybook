import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@designer-ui/react';

export default {
  title: 'Typograph/TextArea',
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any Observation',
    disabled: false,
  }
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any Observation',
    disabled: true
  }
}