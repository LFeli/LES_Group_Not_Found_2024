import { postContent } from '@/api/get-all-posts'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { PostCardTrigger } from './components/post-card-trigger'
import { PostTabs } from './components/post-tabs.'

interface PostCardProps {
  postID: string
  status: string
  content: postContent
}

export function PostCard(data: PostCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="h-full">
        <PostCardTrigger
          title={data.content.title}
          banner={data.content.photoURL}
          donationsType={data.content.donationType}
          description={data.content.description}
          donationGoal={data.content.donationGoal}
          donationsRaised={data.content.donationsRaised}
          status={data.status}
        />
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] overflow-hidden">
        <PostTabs postID={data.postID} content={data.content} />
      </DialogContent>
    </Dialog>
  )
}
