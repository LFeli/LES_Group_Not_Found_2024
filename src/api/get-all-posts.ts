import { api } from '@/lib/axios'

export interface postContent {
  publishedAt: string
  approvedAt: string
  donationType: string
  title: string
  description: string
  photoURL: string
  pixKey: string
  donationGoal: number
  donationsRaised: number
}

export interface getAllPostsResponse {
  postID: string
  userID: string
  admID: string
  admMessage: string
  status: string
  content: postContent
}

interface ApiResponse {
  idPostagem: string
  idUsuario: string
  idAdministrador: string
  dtPublicacao: string
  dtAprovacao: string
  doacaoPix: string
  doacaoRacao: string
  doacaoMedicamento: string
  doacaoOutros: string
  titulo: string
  conteudo: string
  urlFoto: string
  chavePix: string
  metaDoacao: string
  valorArrecadado: string
  msgAdministrador: string
  status: string
}

function getDonationType(item: ApiResponse): string {
  if (item.doacaoPix === 'True') return 'PIX'
  if (item.doacaoRacao === 'True') return 'Ração'
  if (item.doacaoMedicamento === 'True') return 'Medicamento'
  if (item.doacaoOutros === 'True') return 'Outros'
  return 'Desconhecido'
}

export async function getAllPosts(): Promise<getAllPostsResponse[]> {
  const response = await api.get<ApiResponse[]>('/Postagem/TodasPostagens')

  const data: getAllPostsResponse[] = response.data.map((item) => ({
    postID: item.idPostagem,
    userID: item.idUsuario,
    admID: item.idAdministrador,
    admMessage: item.msgAdministrador,
    status: item.status,
    content: {
      publishedAt: item.dtPublicacao,
      approvedAt: item.dtAprovacao,
      donationType: getDonationType(item),
      title: item.titulo,
      description: item.conteudo,
      photoURL: item.urlFoto,
      pixKey: item.chavePix,
      donationGoal: Number(item.metaDoacao),
      donationsRaised: Number(item.valorArrecadado),
    },
  }))

  return data
}
