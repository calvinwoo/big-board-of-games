import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import Post from '../Post'

export default createContainer(Post, ({ params }) => ({
  page: query({ collection: 'posts', id: params.splat })
}))
