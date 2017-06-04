import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
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

const Home = () => (
  <div>
    <p>This is a homepage</p>
  </div>
)

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/posts/*" component={ PostContainer } collection="posts" />
  </Router>
))
