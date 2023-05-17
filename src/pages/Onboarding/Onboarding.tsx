import React, { useCallback, useState } from 'react'
import classes from './Onboarding.module.css'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

type Props = {
  onFinish: () => void
}

export const Onboarding = ({ onFinish }: Props) => {
  const [step, setStep] = useState(1)

  const handleNext = useCallback(() => {
    window.scrollTo(0, 0)
    setStep(2)
  }, [])

  return (
    <div className={classes.wrapper}>
      {step === 1
        ? <Step1 onNext={handleNext}/>
        : <Step2 onFinish={onFinish}/>
      }
    </div>
  )
}
