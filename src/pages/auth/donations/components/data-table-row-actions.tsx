import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { Download, Eye } from 'lucide-react'
import { useState } from 'react'

import fileURL from '@/assets/auth.jpg'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { downloadFile } from '@/utils/download-file'

import { DonationsSchema } from '../schemas/data-donations-schema'
import { PreviewPostDialog } from './preview-post-dialog'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isOpen, setIsOpen] = useState(false)

  const link = DonationsSchema.parse(row.original)

  function handleDownload() {
    const fileUrl = fileURL
    const fileName = 'comprovante.png'
    downloadFile(fileUrl, fileName)
  }

  return (
    <>
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

        <DropdownMenuContent align="end" className="w-[180px]">
          <DropdownMenuItem
            className="flex items-center justify-start gap-2"
            onClick={() => setIsOpen(true)}
          >
            <Eye className="h-4 w-4" />
            Ver publicação
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center justify-start gap-2"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
            Baixar comprovante
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <PreviewPostDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        postID={link.postID}
      />
    </>
  )
}
