import { api } from '@/lib/axios'

interface getAllUserReportsProps {
  userID: number | undefined
}

export interface getAllUserReportsResponse {
  reportID: string
  userID: string
  postID: string
  title: string
  description: string
  reportedAt: string
}

interface apiResponse {
  idDenuncia: string
  idUsuario: string
  idPostagem: string
  tituloDenuncia: string
  descricaoDenuncia: string
  dataDenuncia: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getAllUserReportsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    reportID: item.idDenuncia ? item.idDenuncia : '',
    userID: item.idUsuario ? item.idUsuario : '',
    postID: item.idPostagem ? item.idPostagem : 0,
    title: item.tituloDenuncia ? item.tituloDenuncia : '',
    description: item.descricaoDenuncia ? item.descricaoDenuncia : '',
    reportedAt: item.dataDenuncia ? item.dataDenuncia : '',
  }))
}

export async function getAllUserReports({ userID }: getAllUserReportsProps) {
  try {
    const response = await api.get<apiResponse>(
      `/Denuncia/DenunciaUsuario/${userID}`,
    )

    const data: getAllUserReportsResponse[] = convertApiResponse(response.data)

    return data
  } catch {
    throw new Error('Erro ao atualizar as informações do usuário')
  }
}
