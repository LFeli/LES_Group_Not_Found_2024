import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { DonationsDataTableSchema } from '../schemas/data-donations-schema'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<DonationsDataTableSchema>[] = [
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('status')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Título" />
    ),
    cell: ({ row }) => (
      <div className="min-w-96 truncate font-medium">
        <span>{row.getValue('title')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'value',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          R$ {''}
          {row.getValue('value')}
        </span>
      </div>
    ),
  },

  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data da criação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          {format(new Date(row.getValue('createdAt')), 'dd/MM/yyyy')}
        </span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
