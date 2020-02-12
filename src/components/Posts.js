import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
      <center><h1>Post List</h1></center>
      {posts.map(( post ) => (
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Posts