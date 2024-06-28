import { api } from '@/lib/axios'

interface getUserPostsProps {
  userID: number | undefined
}

export interface getUserPostsResponse {
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
): getUserPostsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao ? item.idDoacao : '',
    userDonorID: item.idUsuarioDoador ? item.idUsuarioDoador : '',
    postID: item.idPostagem ? item.idPostagem : '',
    sponsorID: item.idPatrocinador ? item.idPatrocinador : '',
    voucherID: item.idVoucher ? item.idVoucher : '',
    donationValue: item.valorDoacao ? `R$ ${item.valorDoacao}` : '',
    message: item.mensagem ? item.mensagem : '',
    proofPix: item.comprovantePix ? item.comprovantePix : '',
    donationType: item.idTipoDoacao ? item.idTipoDoacao : '',
    donatedAt: item.dtDoacao ? item.dtDoacao : '',
    donorStatus: item.status ? donorStatusLabels[item.status] : '',
    voucherName: item.cupomVoucher ? item.cupomVoucher : '',
    donorName: item.nomeUsuarioDoador ? item.nomeUsuarioDoador : '',
    titlePost: item.tituloPostagem ? item.tituloPostagem : '',
    statusPost: item.statusPostagem
      ? postStatusLabels[item.statusPostagem]
      : '',
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
