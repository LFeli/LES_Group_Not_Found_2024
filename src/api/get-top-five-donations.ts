import { api } from '@/lib/axios'

interface getTopFiveDonationsProps {
  userID: number
}

export interface getTopFiveDonationsResponse {
  donationValue: string
  message: string
  donatedAt: string
  status: string
}

interface apiResponse {
  valorDoacao: string
  mensagem: string
  dtDoacao: string
  status: string
}

const statusLabels: { [key: string]: string } = {
  N: 'Não aprovada',
  P: 'Em análise',
  A: 'Aceita',
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getTopFiveDonationsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationValue: item.valorDoacao,
    message: item.mensagem,
    donatedAt: item.dtDoacao,
    status: statusLabels[item.status] || 'Desconhecido',
  }))
}

export async function getTopFiveDonations({
  userID,
}: getTopFiveDonationsProps): Promise<getTopFiveDonationsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/UltimasDoacaoUsuario/${userID}`,
  )

  const data: getTopFiveDonationsResponse[] = convertApiResponse(response.data)

  return data
}
