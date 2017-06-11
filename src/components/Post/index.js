import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

const Post = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{page.node.title}</h1>
        <BodyRenderer>{page.node.body}</BodyRenderer>
      </article>
    )}
  </div>
)

export default Post
