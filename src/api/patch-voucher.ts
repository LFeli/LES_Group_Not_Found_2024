import { api } from '@/lib/axios'

interface patchVoucherBody {
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

function convertApiBody(data: patchVoucherBody): apiBody {
  return {
    idVoucher: data.voucherID,
    idPatrocinador: data.sponsorID,
    dtVencimento: data.dueDate,
    cupom: data.voucherName,
    valor: data.value,
    status: data.status,
  }
}

export async function patchVoucher(body: patchVoucherBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    const response = await api.patch(
      `/AtualizarVoucher/${body.voucherID}`,
      apiBodyFormat,
    )

    return response.data
  } catch (error) {
    throw new Error('Erro ao atualizar os valores de um voucher')
  }
}
