import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
  posts: PropTypes.object,
};

const defaultProps = {
  posts: {},
};

const Home = ({ posts }) => (
  <div>
    <h1>Home</h1>
    <ul>
      {
        posts && posts.node && posts.node.list.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
