import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts, selectPostsStatus, getPostsAsync } from "../../app/postsSlice";
import styles from "./Posts.module.css";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostsStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(getPostsAsync());
    }
  }, [postStatus, dispatch]);

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
      <h2>Latest Posts</h2>
      { content }
    </div>
  )
}

export default PostList;
