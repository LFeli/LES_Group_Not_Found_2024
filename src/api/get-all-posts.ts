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

export interface getAllPostsResponse {
  postID: string
  content: postContent
}

interface ApiResponse {
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

export async function getAllPosts(): Promise<getAllPostsResponse[]> {
  const response = await api.get<ApiResponse[]>('/Postagem/TodasPostagens')

  const data: getAllPostsResponse[] = response.data.map((item) => ({
    postID: item.idPostagem,
    content: {
      title: item.titulo,
      description: item.conteudo,
      publishedAt: item.dtPublicacao,
      approvedAt: item.dtAprovacao,
      userID: item.idUsuario,
      administratorID: item.idAdminstrador,
      imagem: item.imagem,
      donationType: 'Remédio',
      pixKey: item.chavePix,
      status: item.status,
      donationGoal: 520,
      donationsRaised: 1000,
    },
  }))

  return data
}
