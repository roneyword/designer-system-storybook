import { MultStepContainer, MultStepLabel, MultSteps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultStepContainer>
      <MultStepLabel>
        Passo {currentStep} de {size}
      </MultStepLabel>

      <MultSteps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </MultSteps>
    </MultStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
