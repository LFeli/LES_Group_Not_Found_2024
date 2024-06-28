import { api } from '@/lib/axios'

interface getUserPostsProps {
  userID: number | undefined
}

export interface getTopFiveUserPostsResponse {
  donationID: string
  userDonorID: string
  postID: string
  sponsorID: string
  voucherID: string
  donationValue: string
  message: string
  proofPix: string
  donationType: string
  donatedAt: string
  donorStatus: string
  voucherName: string
  donorName: string
  titlePost: string
  statusPost: string
}

interface apiResponse {
  idDoacao: string
  idUsuarioDoador: string
  idPostagem: string
  idPatrocinador: string
  idVoucher: string
  valorDoacao: string
  mensagem: string
  comprovantePix: string
  idTipoDoacao: string
  dtDoacao: string
  status: string
  cupomVoucher: string
  nomeUsuarioDoador: string
  tituloPostagem: string
  statusPostagem: string
}

const postStatusLabels: { [key: string]: string } = {
  P: 'Em Análise',
  I: 'Desativada',
  A: 'Ativo',
}

const donorStatusLabels: { [key: string]: string } = {
  P: 'Em Análise',
  A: 'Aceito',
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getTopFiveUserPostsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao,
    userDonorID: item.idUsuarioDoador,
    postID: item.idPostagem,
    sponsorID: item.idPatrocinador,
    voucherID: item.idVoucher,
    donationValue: item.valorDoacao,
    message: item.mensagem,
    proofPix: item.comprovantePix,
    donationType: item.idTipoDoacao,
    donatedAt: item.dtDoacao,
    donorStatus: donorStatusLabels[item.status],
    voucherName: item.cupomVoucher,
    donorName: item.nomeUsuarioDoador,
    titlePost: item.tituloPostagem,
    statusPost: postStatusLabels[item.statusPostagem],
  }))
}

export async function getTopFiveUserPosts({
  userID,
}: getUserPostsProps): Promise<getTopFiveUserPostsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/UltimasDoacoesUsuarioSolicitante/${userID}`, // change route after
  )

  const data: getTopFiveUserPostsResponse[] = convertApiResponse(response.data)

  return data
}
