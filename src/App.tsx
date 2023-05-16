import React, { useState } from 'react'
import { Main } from './pages/Main'
import { Onboarding } from './pages/Onboarding/Onboarding'

export const App = () => {
  const [isOnboarding, setOnboarding] = useState(false)

  const handleCompleteOnboarding = () => setOnboarding(false)
  const handleStartOnboarding = () => setOnboarding(true)

  return (
    <>
      {isOnboarding
        ? <Onboarding onFinish={handleCompleteOnboarding}/>
        : <Main onStartOnboarding={handleStartOnboarding}/>
      }
    </>
  )
}

