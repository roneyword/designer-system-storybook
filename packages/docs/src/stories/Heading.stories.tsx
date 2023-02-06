import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@designer-ui/react';

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: "Custom title"
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'
      ],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong text",
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story: "por padrão o heading sempre será um `h2`, mas pordemos alterar isso com a propriedade `as`."
      }
    }
  }

}