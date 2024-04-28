import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRoutesProps {
  element: ReactNode
}

export function PrivateRoutes({ element }: PrivateRoutesProps) {
  const auth = { token: true }

  return auth.token ? element : <Navigate to={'/login'} />
}
