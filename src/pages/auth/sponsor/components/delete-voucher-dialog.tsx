import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteVoucher } from '@/api/delete-voucher'
import { getUserVouchers } from '@/api/get-user-voucher'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useAuth } from '@/context/auth-context'

interface deleteVoucherDialogProps {
  voucherID: string | undefined
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function DeleteVoucherDialog({
  voucherID,
  isOpen,
  setIsOpen,
}: deleteVoucherDialogProps) {
  const { user } = useAuth()

  const { mutateAsync: deleteVoucherFn } = useMutation({
    mutationFn: deleteVoucher,
  })

  const { refetch: refetchUserVouchers } = useQuery({
    queryFn: () => getUserVouchers({ userID: user?.idUser }),
    queryKey: ['get-user-vouchers', 'vouchers'],
  })

  async function handleSubmit() {
    try {
      await deleteVoucherFn({ voucherID })
      await refetchUserVouchers()
      setIsOpen(false)
      toast.success('Voucher excluído com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao excluir o voucher')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-rubik text-xl">
            Editar Voucher
          </DialogTitle>
          <DialogDescription className="font-karla text-base leading-relaxed">
            Atenção essa
            <span className="font-medium text-red-700">
              {' '}
              ação e irreversível
            </span>
            , pense muito bem antes de excluir este voucher.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="pt-4">
          <Button
            onClick={handleSubmit}
            className="mb-1 ml-auto mr-1 bg-red-500 text-zinc-100 hover:bg-red-600"
          >
            Excluir voucher
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
