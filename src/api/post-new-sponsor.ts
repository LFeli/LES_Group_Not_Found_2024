import { api } from '@/lib/axios'

interface postNewSponsorBody {
  userID: number | undefined
  cnpj: string
  corporateName: string
  stateRegistration: string
  description: string
}

interface apiBody {
  idUsuario: number | undefined
  cnpj: string
  razaoSocial: string
  inscricaoEstadual: string
  observacao: string
}

function convertApiBody(data: postNewSponsorBody): apiBody {
  return {
    idUsuario: data.userID,
    cnpj: data.cnpj,
    razaoSocial: data.corporateName,
    inscricaoEstadual: data.stateRegistration,
    observacao: data.description,
  }
}

export async function postNewSponsor(body: postNewSponsorBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.post('/Patrocinador/InserirNovoPatrocinador', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao cadastrar um novo patrocinador')
  }
}
