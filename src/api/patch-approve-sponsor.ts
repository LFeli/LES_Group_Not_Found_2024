import { api } from '@/lib/axios'

export interface patchApproveSponsorBody {
  sponsorID: string
  sponsorStatus: string
  admMessage: string
}

interface apiBody {
  idPatrocinador: string
  statusPatrocinador: string
  msgAdministrador: string
}

function convertApiBody(data: patchApproveSponsorBody): apiBody {
  return {
    idPatrocinador: data.sponsorID,
    statusPatrocinador: data.sponsorStatus,
    msgAdministrador: data.admMessage,
  }
}

export async function patchApproveSponsor(body: patchApproveSponsorBody) {
  try {
    const apiBodyFormat = convertApiBody(body)
    console.log(apiBodyFormat)

    await api.patch(
      `/Patrocinador/AprovarPatrocinador/${body.sponsorID}/${body.sponsorStatus}/${body.admMessage}`,
      apiBodyFormat,
    )
  } catch {
    throw new Error('Erro ao atualizar as informações da postagem')
  }
}
