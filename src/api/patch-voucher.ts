import { api } from '@/lib/axios'
import { formatToFloat } from '@/utils/format-to-float'

interface patchVoucherBody {
  voucherID: number | string | undefined
  validateAt: string
  voucherName: string
  voucherValue: string
  status: string
}

interface apiBody {
  idVoucher: number | string | undefined
  dtVencimento: string
  cupom: string
  valor: string
  status: string
}

function convertApiBody(data: patchVoucherBody): apiBody {
  return {
    idVoucher: data.voucherID,
    dtVencimento: data.validateAt,
    cupom: data.voucherName,
    valor: formatToFloat(data.voucherValue),
    status: data.status,
  }
}

export async function patchVoucher(body: patchVoucherBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.patch('/Voucher/AtualizarVoucher', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao atualizar os valores de um voucher')
  }
}
