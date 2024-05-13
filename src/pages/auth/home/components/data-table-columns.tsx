import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { DonationsTableSchema } from '../schemas/data-table-donations-schema'

export const columns: ColumnDef<DonationsTableSchema>[] = [
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
      <div>
        <span className="max-w-[640px] truncate font-medium">
          {row.getValue('title')}
        </span>
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
      <DataTableColumnHeader column={column} title="Data da doação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          {format(new Date(row.getValue('createdAt')), 'dd/MM/yyyy')}
        </span>
      </div>
    ),
  },
]
