import React, { useCallback, useState } from 'react'
import { useSetUserInfoMutation } from '../../api'
import classes from './Onboarding.module.css'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

type Props = {
  onFinish: () => void
  isCompleted: boolean
}

export const Onboarding = ({ onFinish, isCompleted }: Props) => {
  const [step, setStep] = useState(1)
  const [completeOnboarding] = useSetUserInfoMutation()

  const handleNext = useCallback(() => {
    window.scrollTo(0, 0)
    setStep(2)
  }, [])

  const handleComplete = useCallback(() => {
    !isCompleted && completeOnboarding({ onboardingComplete: true }).unwrap();
    onFinish()
  }, [onFinish])

  return (
    <div className={classes.wrapper}>
      {step === 1
        ? <Step1 onNext={handleNext}/>
        : <Step2 onFinish={handleComplete}/>
      }
    </div>
  )
}
