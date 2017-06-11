import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'
import { createContainer, query, BodyRenderer } from '@phenomic/preset-react-app/lib/client'
import PostContainer from './src/components/PostContainer'
import HomeContainer from './src/components/HomeContainer'
import PageNotFound from './src/components/PageNotFound'

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/post/*" component={PostContainer} collection="posts" />
    <Route path="*" component={PageNotFound} />
  </Router>
))

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
