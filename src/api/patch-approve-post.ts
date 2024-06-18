import { api } from '@/lib/axios'

export interface patchApprovePostBody {
  approveAt: string
  admMessage: string
  status: string
}

interface apiBody {
  dtAprovacao: string
  msgAdministrador: string
  status: string
}

function convertApiBody(data: patchApprovePostBody): apiBody {
  return {
    dtAprovacao: data.approveAt,
    msgAdministrador: data.admMessage,
    status: data.status,
  }
}

export async function patchApprovePost(body: patchApprovePostBody) {
  try {
    const apiBodyFormat = convertApiBody(body)
    console.log(apiBodyFormat)

    await api.patch(`/Postagem/AprovarPostagem`, apiBodyFormat)
  } catch {
    throw new Error('Erro ao atualizar as informações da postagem')
  }
}
