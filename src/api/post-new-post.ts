import { api } from '@/lib/axios'

export interface postContent {
  title: string
  description: string
  publishedAt: string
  approvedAt: string
  userID: string
  administratorID: string
  imagem: string
  donationType: string
  pixKey: string
  status: string
  donationGoal: number
  donationsRaised: number
}

export interface postNewPostResponse {
  postID: string
  content: postContent
}

interface apiBody {
  idPostagem: string
  titulo: string
  conteudo: string
  dtPublicacao: string
  dtAprovacao: string
  idUsuario: string
  idAdminstrador: string
  imagem: string
  chavePix: string
  status: string
}

function convertApiBody(data: postNewPostResponse): apiBody {
  return {
    idPostagem: data.postID,
    titulo: data.content.title,
    conteudo: data.content.description,
    dtPublicacao: data.content.publishedAt,
    dtAprovacao: data.content.approvedAt,
    idUsuario: data.content.userID,
    idAdminstrador: data.content.administratorID,
    imagem: data.content.imagem,
    chavePix: data.content.pixKey,
    status: data.content.status,
  }
}

export async function postNewPost(body: postNewPostResponse) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.post('/InserirNovapostagem', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao cadastrar uma nova postagem')
  }
}
