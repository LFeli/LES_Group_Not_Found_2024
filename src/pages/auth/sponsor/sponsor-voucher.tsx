import { Helmet } from 'react-helmet-async'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'
import jsonData from './fake-data.json'

export function SponsorVoucher() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      <div className="container max-w-screen-2xl space-y-32 px-6 py-32">
        <div className="max-w-5xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Doações que <span className="text-yellow-600"> contribuiu</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Explore a seção de contribuições, onde você pode encontrar todas as
            postagens de doações que você já contribuiu.
          </p>
        </div>

        <DataTable columns={columns} data={jsonData} />
      </div>
    </main>
  )
}
