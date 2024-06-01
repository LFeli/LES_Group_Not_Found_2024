import { api } from '@/lib/axios'

export interface getAllDonations {
  donationID: string
  admID: string | null
  postID: string
  voucherID: string | null
  donationValue: string
  message: string
  pixProof: string
  donatedAt: string
  status: string
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
): getAllDonations[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao,
    admID: item.idAdminstrador,
    postID: item.idPostagem,
    voucherID: item.idVoucher,
    donationValue: item.valorDoacao,
    message: item.mensagem,
    pixProof: item.comprovantePix,
    donatedAt: item.dtDoacao,
    status: item.status,
  }))
}

export async function getUserDonations(): Promise<getAllDonations[]> {
  const response = await api.get<apiResponse[]>('/Doacao/TodasDoacoes')

  const data: getAllDonations[] = convertApiResponse(response.data)

  return data
}
