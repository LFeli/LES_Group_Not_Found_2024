import { api } from '@/lib/axios'

export interface postNewDonationBody {
  donationID: string
  admID: string
  userID: string
  title: string
  description: string
  publishedAt: string
  approvedAt: string
  image: string
  pixKey: string
  status: string
}

interface apiBody {
  idPostagem: string
  idAdminstrador: string
  idUsuario: string
  titulo: string
  conteudo: string
  dtPublicacao: string
  dtAprovacao: string
  imagem: string
  chavePix: string
  status: string
}

function convertApiBody(data: postNewDonationBody): apiBody {
  return {
    idPostagem: data.donationID,
    titulo: data.admID,
    conteudo: data.userID,
    dtPublicacao: data.title,
    dtAprovacao: data.description,
    idUsuario: data.publishedAt,
    idAdminstrador: data.approvedAt,
    imagem: data.image,
    chavePix: data.pixKey,
    status: data.status,
  }
}

export async function postNewDonation(body: postNewDonationBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.post('/Doacao/InserirNovaDoacao', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao fazer uma nova doação')
  }
}
