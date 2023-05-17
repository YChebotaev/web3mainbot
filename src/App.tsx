import React, { useEffect, useState } from 'react'
import { useGetUserByIdQuery } from './api'
import { Main } from './pages/Main'
import { Onboarding } from './pages/Onboarding/Onboarding'
import { getUserId } from './utils'

export const App = () => {
  const { data, isLoading } = useGetUserByIdQuery({ id: getUserId() })
  const [isOnboarding, setOnboarding] = useState(true)

  const handleCompleteOnboarding = () => {
    window.scrollTo(0, 0)
    setOnboarding(false)

  }
  const handleStartOnboarding = () => {
    window.scrollTo(0, 0)
    setOnboarding(true)
  }

  useEffect(() => {
    if (data) {
      setOnboarding(!data.isOnboardingPassed)
    }
  }, [data])

  if (isLoading) {
    return null
  }

  return (
    <>
      {isOnboarding
        ? <Onboarding onFinish={handleCompleteOnboarding}/>
        : <Main phone={data?.phone} onStartOnboarding={handleStartOnboarding}/>
      }
    </>
  )
}

