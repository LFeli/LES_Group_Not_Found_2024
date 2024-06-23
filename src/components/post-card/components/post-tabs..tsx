import { useLocation } from 'react-router-dom'

import { postContent } from '@/api/get-all-posts'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/context/auth-context'

import { PostContentTab } from './post-content-tab'
import { PostReportTab } from './post-report-tab'

interface PostTabProps {
  postID: string
  status: string
  content: postContent
  closeDialog: () => void
}

export function PostTabs({
  postID,
  status,
  content,
  closeDialog,
}: PostTabProps) {
  const { user } = useAuth()
  const location = useLocation()

  return (
    <Tabs defaultValue="post" className="w-full max-w-2xl space-y-2 pt-8 ">
      <TabsList
        className={`grid w-full  ${user && location.pathname !== '/postagens' && status === 'A' ? 'grid-cols-2' : 'grid-cols-1'}`}
      >
        <TabsTrigger value="post">Postagem</TabsTrigger>
        {user && location.pathname !== '/postagens' && status === 'A' && (
          <TabsTrigger value="report">Denunciar</TabsTrigger>
        )}
      </TabsList>

      <div className="rounded-md bg-muted p-4">
        <PostContentTab
          postID={postID}
          status={status}
          content={content}
          closeDialog={closeDialog}
        />

        {user && location.pathname !== '/postagens' && status === 'A' && (
          <PostReportTab
            postID={postID}
            content={content}
            closeDialog={closeDialog}
          />
        )}
      </div>
    </Tabs>
  )
}
