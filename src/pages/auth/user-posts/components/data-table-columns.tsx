import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { PostUserDataTableSchema } from '../schemas/post-user-schema'
import { DataTableRowActions } from './data-table-row-action'

export const columns: ColumnDef<PostUserDataTableSchema>[] = [
  {
    accessorKey: 'statusPost',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate font-medium">
        <span>{row.getValue('statusPost')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'titlePost',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titulo" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('titlePost')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donorName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do doador" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('donorName')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donationValue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor doado" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">R$ {row.getValue('donationValue')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donorStatus',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status da doação recebida"
      />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('donorStatus')}</span>
      </div>
    ),
  },

  {
    id: 'userID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('userID')}</span>
      </div>
    ),
  },

  {
    id: 'postID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('postID')}</span>
      </div>
    ),
  },

  {
    id: 'donationID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('donationID')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
