import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import { Row } from '@tanstack/react-table'
import { Check, CircleSlash2, Download } from 'lucide-react'

import { patchApproveDonation } from '@/api/patch-approve-donation'
import fileURL from '@/assets/auth.jpg'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { downloadFile } from '@/utils/download-file'

import { postUserSchema } from '../schemas/post-user-schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { mutateAsync: patchApproveDonationFn } = useMutation({
    mutationFn: patchApproveDonation,
  })

  function handleDownload() {
    const fileUrl = fileURL
    const fileName = 'comprovante.png'
    downloadFile(fileUrl, fileName)
  }

  const link = postUserSchema.parse(row.original)
  console.log('Output of link on DataTableRowActions component: ', link)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="">
        <DropdownMenuItem
          onClick={() =>
            patchApproveDonationFn({
              donationID: link.donationID,
              status: 'A',
            })
          }
          className="flex items-center justify-start gap-2"
        >
          <Check className="h-4 w-4" /> Aprovar doação
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            patchApproveDonationFn({
              donationID: link.donationID,
              status: 'I',
            })
          }
          className="flex items-center justify-start gap-2"
        >
          <CircleSlash2 className="h-4 w-4" /> Rejeitar doação
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center justify-start gap-2"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Baixar comprovante
        </DropdownMenuItem>
      </DropdownMenuContent>

      {/* <Dialog open={isViewPostDialog} onOpenChange={setIsViewPostDialog}>
        <ApprovalDialog postID={link.postID} />
      </Dialog> */}
    </DropdownMenu>
  )
}
