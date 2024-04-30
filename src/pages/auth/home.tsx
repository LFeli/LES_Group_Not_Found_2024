import { Helmet } from 'react-helmet-async'

export function AuthHome() {
  return (
    <>
      <Helmet title="Home Autenticada" />
      <span>Home Autenticada</span>
    </>
  )
}
