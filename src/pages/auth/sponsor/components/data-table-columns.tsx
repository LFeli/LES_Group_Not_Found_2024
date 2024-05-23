import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { VouchersDataTableSchema } from '../schemas/vouchers-schema'

export const columns: ColumnDef<VouchersDataTableSchema>[] = [
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
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="flex-1 truncate font-medium">
        <span>{row.getValue('title')}</span>
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
    accessorKey: 'isUse',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Uso" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('isUse')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'dateOfUse',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de uso" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          {' '}
          {format(new Date(row.getValue('dateOfUse')), 'dd/MM/yyyy')}
        </span>
      </div>
    ),
  },
]
