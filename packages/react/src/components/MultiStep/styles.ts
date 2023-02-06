import { styled } from '../../styles'
import { Text } from '../Text'

export const MultStepContainer = styled('div', {})

export const MultStepLabel = styled(Text, {
  color: '$gray200',
  fontSize: '$xs',
})

export const MultSteps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray100',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray600',
      },
    },
  },
})
