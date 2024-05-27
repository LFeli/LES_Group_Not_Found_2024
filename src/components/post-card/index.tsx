import { DialogContent } from '@radix-ui/react-dialog'

import { postContent } from '@/api/get-all-posts'

import { Dialog, DialogTrigger } from '../ui/dialog'
import { PostCardTrigger } from './components/post-card-trigger'

interface PostCardProps {
  content: postContent
}

export function PostCard(data: PostCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <PostCardTrigger
          title={data.content.title}
          banner={data.content.imagem}
          donationsType={data.content.donationType}
          description={data.content.description}
          donationGoal={data.content.donationGoal}
          donationsRaised={data.content.donationsRaised}
        />
      </DialogTrigger>

      <DialogContent>
        <span>Post Content here...</span>
      </DialogContent>
    </Dialog>
  )
}
