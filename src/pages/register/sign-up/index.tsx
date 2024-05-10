import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { Form } from './components/form'

export function SignUp() {
  return (
    <>
      <Helmet title="Login" />

      <main className="p-8">
        <Button variant={'ghost'} className="absolute right-8 top-8 p-0">
          <Link to="/login" className="px-4 py-2">
            Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-rubik text-2xl font-semibold tracking-tighter">
              Fazer seu cadastro
            </h1>
            <span className="text-sm text-muted-foreground">
              Faça login o seu cadastro para acessar nossa plataforma.
            </span>
          </div>

          <Form />
        </div>
      </main>
    </>
  )
}
