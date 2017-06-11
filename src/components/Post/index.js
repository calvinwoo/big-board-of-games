import React from 'react';
import PropTypes from 'prop-types';
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client';

const propTypes = {
  page: PropTypes.object,
};

const defaultProps = {
  page: {},
};

const Post = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{page.node.title}</h1>
        <BodyRenderer>{page.node.body}</BodyRenderer>
      </article>
    )}
  </div>
);

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;
