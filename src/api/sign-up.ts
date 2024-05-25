import { api } from '@/lib/axios'

export interface signUpBody {
  name: string
  cpf: string
  dateOfBirth: string
  phone: string
  email: string
  password: string
  addressStreet: string
  addressNumber: string
  addressDistrict: string
  addressCep: string
  addressCity: string
  addressState: string
}

export async function signUp(data: signUpBody) {
  await api.post('/Usuarios/InserirNovoUsuario', {
    nome: data.name,
    cpf: data.cpf,
    dtNascimento: data.dateOfBirth,
    celular: data.phone,
    email: data.email,
    senha: data.password,
    logradouro: data.addressStreet,
    numero: data.addressNumber,
    bairro: data.addressDistrict,
    cep: data.addressCep,
    municipio: data.addressCity,
    estado: data.addressState,
  })
}
