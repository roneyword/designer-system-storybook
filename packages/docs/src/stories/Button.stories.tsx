import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@designer-ui/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    disabled: false
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    disabled: false
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
    children: (
      <>
        Proximo passo
        <ArrowRight weight='bold' />
      </>
    )
  }
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}