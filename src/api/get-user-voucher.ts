import { api } from '@/lib/axios'

interface getUserVoucherProps {
  userID: number | undefined
}

interface getUserVoucherResponse {
  voucherID: string
  validateAt: string
  voucherName: string
  voucherValue: string
  status: string
}

interface apiResponse {
  idVoucher: string
  dtVencimento: string
  cupom: string
  valor: string
  status: string
}

const statusLabels: { [key: string]: string } = {
  I: 'Inativo',
  A: 'Ativo',
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserVoucherResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    voucherID: item.idVoucher,
    validateAt: item.dtVencimento,
    voucherName: item.cupom,
    voucherValue: item.valor,
    status: statusLabels[item.status] || 'Desconhecido',
  }))
}

export async function getUserVouchers({
  userID,
}: getUserVoucherProps): Promise<getUserVoucherResponse[]> {
  const response = await api.get<apiResponse>(
    `/Voucher/VoucherPatronicador/${userID}`,
  )
  console.log(response.data)

  const data: getUserVoucherResponse[] = convertApiResponse(response.data)

  return data
}
