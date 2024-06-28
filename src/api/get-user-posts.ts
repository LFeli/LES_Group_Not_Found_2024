import { api } from '@/lib/axios'

interface getUserPostsProps {
  userID: number | undefined
}

export interface getUserPostsResponse {
  userID: string
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
  idPatrocinador: string
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
): getUserPostsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    userID: item.idDoacao,
    userDonorID: item.idUsuarioDoador,
    postID: item.idPostagem,
    sponsorID: item.idVoucher,
    voucherID: item.valorDoacao,
    donationValue: item.mensagem,
    message: item.comprovantePix,
    proofPix: item.idTipoDoacao,
    donationType: item.dtDoacao,
    donatedAt: item.status,
    donorStatus: donorStatusLabels[item.cupomVoucher],
    voucherName: item.nomeUsuarioDoador,
    donorName: item.tituloPostagem,
    titlePost: item.statusPostagem,
    statusPost: postStatusLabels[item.idPatrocinador],
  }))
}

export async function getUserPosts({
  userID,
}: getUserPostsProps): Promise<getUserPostsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/TodasDoacoesUsuarioSolicitante/${userID}`, // change route after
  )

  const data: getUserPostsResponse[] = convertApiResponse(response.data)

  return data
}
