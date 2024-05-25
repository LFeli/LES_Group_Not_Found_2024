import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from './context/auth-context'

interface PrivateRoutesProps {
  element: ReactNode
  routeType: string
}

export function PrivateRoute({ element, routeType }: PrivateRoutesProps) {
  const { user } = useAuth()
  console.log(user)

  return user && user.userType === routeType ? (
    element
  ) : (
    <Navigate to={'/login'} />
  )
}
