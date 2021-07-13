import React from "react";
import { Link } from "react-router-dom";
import styles from "./Posts.module.css";

const PostList = (props) => {
  const { posts, postStatus, postTypes } = props;

  let content;

  if (postStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (postStatus === 'succeeded') {
    content = posts.map(post => (
      <div key={post.id} className={styles.post}>
        <p className={styles.posts__title}>{post.title}</p>
        <Link to={`/post/${post.id}`} className={styles.post__link}>
          View Post
        </Link>
      </div>
    ))
  } else if (postStatus === 'failed') {
    content = <div>{ error }</div>
  }

  return (
    <div className={styles.posts}>
      <h2>{ postTypes }</h2>
      { content }
    </div>
  )
}

export default PostList;
