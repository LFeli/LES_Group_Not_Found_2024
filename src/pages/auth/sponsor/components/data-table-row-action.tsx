import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { VouchersSchema } from '../schemas/vouchers-schema'
import { DeleteVoucherDialog } from './delete-voucher-dialog'
import { EditVoucherDialog } from './edit-voucher-dialog'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isEditVoucherDialog, setIsEditVoucherDialog] = useState(false)
  const [isDeleteVoucherDialog, setIsDeleteVoucherDialog] = useState(false)

  const link = VouchersSchema.parse(row.original)
  console.log('Output of link on DataTableRowActions component: ', link)

  return (
    <>
      {link.voucherID === 'I' ? (
        <span></span>
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem
                onClick={() => setIsEditVoucherDialog(true)}
                className="flex items-center justify-start gap-2"
              >
                <Pencil className="h-4 w-4" />
                Editar Voucher
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsDeleteVoucherDialog(true)}
                className="flex items-center justify-start gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>

            <EditVoucherDialog
              voucherID={link.voucherID}
              isOpen={isEditVoucherDialog}
              setIsOpen={setIsEditVoucherDialog}
            />

            <DeleteVoucherDialog
              voucherID={link.voucherID}
              isOpen={isDeleteVoucherDialog}
              setIsOpen={setIsDeleteVoucherDialog}
            />
          </DropdownMenu>
        </>
      )}
    </>
  )
}
