import { Helmet } from 'react-helmet-async'

export function AuthenticatedHome() {
  return (
    <>
      <Helmet title="Home Autenticada" />
      <span>Home Autenticada</span>
    </>
  )
}
