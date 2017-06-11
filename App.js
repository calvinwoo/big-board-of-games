import React from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'
import { createApp } from '@phenomic/preset-react-app/lib/client'
import { createContainer, query, BodyRenderer } from '@phenomic/preset-react-app/lib/client'

const Post = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </div>
)

const PostContainer = createContainer(Post, (props) => ({
  page: query({ collection: 'posts', id: props.params.splat }),
}))

const Home =  ({ posts }) => (
  <div>
    <h1>Home</h1>
    <ul>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({ collection: 'posts' }),
}))

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/post/*" component={ PostContainer } collection="posts" />
  </Router>
))
