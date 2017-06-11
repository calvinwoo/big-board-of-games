import React from 'react'
import { Link } from 'react-router'

const Home = ({ posts }) => (
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

export default Home
