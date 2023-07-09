import { useParams } from 'react-router-dom'
import { PostContainer } from './styles'

export function Post() {
  const { issueId } = useParams()

  console.log(issueId)

  return <PostContainer>Post</PostContainer>
}
