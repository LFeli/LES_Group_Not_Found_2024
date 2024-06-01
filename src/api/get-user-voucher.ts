import { api } from '@/lib/axios'

interface getUserVoucherProps {
  userID: string
}

interface getUserVoucherResponse {
  voucherID: string
  sponsorID: string
  dueDate: string
  voucherName: string
  value: string
  status: string
}

interface apiResponse {
  idVoucher: string
  idPatrocinador: string
  dtVencimento: string
  cupom: string
  valor: string
  status: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserVoucherResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    voucherID: item.idVoucher,
    sponsorID: item.idPatrocinador,
    dueDate: item.dtVencimento,
    voucherName: item.cupom,
    value: item.valor,
    status: item.status,
  }))
}

export async function getAllVouchers({
  userID,
}: getUserVoucherProps): Promise<getUserVoucherResponse[]> {
  const response = await api.get<apiResponse>(
    `/Voucher/VoucherPatronicador/${userID}`,
  )

  const data: getUserVoucherResponse[] = convertApiResponse(response.data)

  return data
}
