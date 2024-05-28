import { api } from '@/lib/axios'

interface getUserDonationsProps {
  userID: number
}

interface getUserDonationsResponse {
  donationID: string
  admID: string | null
  donorUserID: string
  postID: string
  voucherID: string
  donationGoal: string
  message: string
}

interface apiResponse {
  idDoacao: string
  idAdminstrador: string | null
  idUsuarioDoador: string
  idPostagem: string
  idVoucher: string
  valorDoacao: string
  mensagem: string
  comprovantePix: string
  dtDoacao: string
  status: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserDonationsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao,
    admID: item.idAdminstrador,
    donorUserID: item.idUsuarioDoador,
    postID: item.idPostagem,
    voucherID: item.idVoucher,
    donationGoal: item.valorDoacao,
    message: item.mensagem,
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
