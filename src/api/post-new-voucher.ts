import { api } from '@/lib/axios'

interface postNewVoucherBody {
  voucherID: string
  sponsorID: string
  dueDate: string
  voucherName: string
  value: string
  status: string
}

interface apiBody {
  idVoucher: string
  idPatrocinador: string
  dtVencimento: string
  cupom: string
  valor: string
  status: string
}

function convertApiBody(data: postNewVoucherBody): apiBody {
  return {
    idVoucher: data.voucherID,
    idPatrocinador: data.sponsorID,
    dtVencimento: data.dueDate,
    cupom: data.voucherName,
    valor: data.value,
    status: data.status,
  }
}

export async function postNewVoucher(body: postNewVoucherBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    const response = await api.post('/InserirNovoVoucher', apiBodyFormat)

    return response.data
  } catch (error) {
    throw new Error('Erro ao cadastrar um novo voucher')
  }
}
