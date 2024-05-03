import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { deleteCookie } from '@/utils/cookie'

export function AuthHome() {
  const navigate = useNavigate()

  function handleLogOut() {
    deleteCookie({ name: 'omdAuth' })
    navigate('/login', { replace: true })
  }

  return (
    <>
      <Helmet title="Home Autenticada" />
      <span>Home Autenticada</span>
      {/* <button
        onClick={() => {
          deleteCookie({ name: 'omdAuth' })
        }}
      >Botão de </button> */}

      <Button onClick={handleLogOut}>Logout do usuário</Button>
    </>
  )
}
