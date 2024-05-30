import { api } from '@/lib/axios'

interface deleteVoucherProps {
  voucherID: number
}

export async function deleteVoucher({ voucherID }: deleteVoucherProps) {
  try {
    await api.delete(`/DeletarVoucher/${voucherID}`)
  } catch (error) {
    throw new Error('Erro ao excluir um voucher')
  }
}
