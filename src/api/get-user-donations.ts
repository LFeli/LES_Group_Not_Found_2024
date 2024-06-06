import { api } from '@/lib/axios'

interface getUserDonationsProps {
  userID: number
}

interface getUserDonationsResponse {
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

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserDonationsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationValue: item.valorDoacao,
    message: item.mensagem,
    donatedAt: item.dtDoacao,
    status: item.status,
  }))
}

export async function getUserDonations({
  userID,
}: getUserDonationsProps): Promise<getUserDonationsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/DoacaoUsuario/${userID}`,
  )

  const data: getUserDonationsResponse[] = convertApiResponse(response.data)

  return data
}
