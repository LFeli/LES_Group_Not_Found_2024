import { api } from '@/lib/axios'

interface postNewReportBody {
  reportID: string
  userID: string
  postID: string
  title: string
  description: string
  reportedAt: string
}

interface apiBody {
  idDenuncia: string
  idUsuario: string
  idPostagem: string
  tituloDenuncia: string
  descricaoDenuncia: string
  dataDenuncia: string
}

function convertApiBody(data: postNewReportBody): apiBody {
  return {
    idDenuncia: data.reportID,
    idUsuario: data.userID,
    idPostagem: data.postID,
    tituloDenuncia: data.title,
    descricaoDenuncia: data.description,
    dataDenuncia: data.reportedAt,
  }
}

export async function postNewVoucher(body: postNewReportBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    const response = await api.post('/InserirNovaDenuncia', apiBodyFormat)

    return response.data
  } catch (error) {
    throw new Error('Erro ao cadastrar uma nova denúncia')
  }
}
