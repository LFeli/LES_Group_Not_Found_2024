import { PiggyBank } from 'lucide-react'

import { FormatCurrencyWithSuffix } from '@/utils/format-currency-with-suffix'

interface PostCardTriggerProps {
  title: string
  banner: string
  donationsType: string
  description: string
  donationGoal: number
  donationsRaised: number
}

export function PostCardTrigger({
  title,
  banner,
  donationsType,
  description,
  donationGoal,
  donationsRaised,
}: PostCardTriggerProps) {
  return (
    <article className="overflow-hidden rounded-[20px] bg-white shadow-lg">
      <img src={banner} alt={`Foto da doação para o(a) ${title}`} />

      <div className="space-y-6 p-4">
        <div className="flex flex-col items-start">
          <h4 className="font-rubik text-lg font-semibold">{title}</h4>
          <span className="font-medium text-yellow-700">{donationsType}</span>
        </div>

        <p className="max-w-[380px] text-left leading-relaxed">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PiggyBank className="h-8 w-8 text-green-700" />

            <span className="text-lg">
              {FormatCurrencyWithSuffix(donationsRaised)} /{' '}
              {FormatCurrencyWithSuffix(donationGoal)}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
