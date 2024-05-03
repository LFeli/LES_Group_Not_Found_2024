import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { getCookie } from './utils/cookie'

interface PrivateRoutesProps {
  element: ReactNode
  routeType: string
}

export function PrivateRoute({ element, routeType }: PrivateRoutesProps) {
  const cookie = getCookie({ name: 'omdAuth' })

  return cookie && cookie.tipoUsuario === routeType ? (
    element
  ) : (
    <Navigate to={'/login'} />
  )
}
