import { api } from '@/lib/axios'

interface getUserInfosProps {
  userID: string
}

interface getUserInfosResponse {
  userID: string
  name: string
  cpf: string
  email: string
  phone: string
  photoURL: string
  dateOfBirth: string
  addressStreet: string
  addressNumber: string
  addressDistrict: string
  addressCep: string
  addressCity: string
  addressState: string
}

interface apiResponse {
  idUsuario: string
  nome: string
  cpf: string
  email: string
  celular: string
  urlFoto: string
  dataNasc: string
  logradouro: string
  numero: string
  bairro: string
  cep: string
  municipio: string
  estado: string
}

function convertApiResponse(data: apiResponse): getUserInfosResponse {
  return {
    userID: data.idUsuario,
    name: data.nome,
    cpf: data.cpf,
    email: data.email,
    phone: data.celular,
    photoURL: data.urlFoto,
    dateOfBirth: data.dataNasc,
    addressStreet: data.logradouro,
    addressNumber: data.numero,
    addressDistrict: data.bairro,
    addressCep: data.cep,
    addressCity: data.municipio,
    addressState: data.estado,
  }
}

export async function getUserInfos({
  userID,
}: getUserInfosProps): Promise<getUserInfosResponse> {
  const response = await api.get<apiResponse>(`/Usuarios/Usuario/${userID}`)

  const data: getUserInfosResponse = convertApiResponse(response.data)

  return data
}
