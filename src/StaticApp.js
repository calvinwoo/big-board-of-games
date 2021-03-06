import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client';
import PostContainer from './components/PostContainer';
import HomeContainer from './components/HomeContainer';
import PageNotFound from './components/PageNotFound';
import TempLandingPage from './components/TempLandingPage';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={TempLandingPage} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/post/*" component={PostContainer} collection="posts" />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
