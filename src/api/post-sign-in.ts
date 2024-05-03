import { api } from '@/lib/axios'

export interface signInBody {
  email: string
  password: string
}

export interface signInResponse {
  idUsuario: number
  nome: string
  tipoUsuario: string
}

export async function postSignIn({ email, password }: signInBody) {
  const response = await api.post<signInResponse>('/Usuarios/LoginUsuario', {
    email,
    senha: password,
  })

  console.log(response)
  return response.data
}
