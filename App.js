import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client';
import PostContainer from './src/components/PostContainer';
import HomeContainer from './src/components/HomeContainer';
import PageNotFound from './src/components/PageNotFound';
import GameEntryContainer from './src/components/GameEntryContainer';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/post/*" component={PostContainer} collection="posts" />
    <Route path="/game" component={GameEntryContainer} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
