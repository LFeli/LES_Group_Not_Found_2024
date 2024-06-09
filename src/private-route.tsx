import { ReactNode, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAuth } from './context/auth-context'

interface PrivateRoutesProps {
  element: ReactNode
  routeType: string[]
}

export function PrivateRoute({ element, routeType }: PrivateRoutesProps) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.userType === 'A') {
      navigate('/admin/', { replace: true })
    }
  }, [user, navigate])

  return user && routeType.includes(user.userType) ? (
    element
  ) : (
    <Navigate to={'/login'} />
  )
}
