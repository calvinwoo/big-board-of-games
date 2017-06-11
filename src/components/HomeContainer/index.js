import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import Home from '../Home'

export default createContainer(Home, ({}) => ({
  posts: query({ collection: 'posts' }),
}))
