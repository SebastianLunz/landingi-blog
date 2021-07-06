import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById } from "../../app/postsSlice";
import {
  selectAllPostComments,
  selectCommentsStatus,
  getCommentsAsync
} from "../../app/commentsSlice";
import styles from "./Posts.module.css";
import AddCommentForm from "../comments/AddCommentForm";


const SinglePost = ({ match }) => {
  const { postId  } = match.params;
  const dispatch = useDispatch();
  const post = useSelector(state => selectPostById(state, postId));
  const comments = useSelector(selectAllPostComments);
  const commentsStatus = useSelector(selectCommentsStatus);

  if (!post) {
    return (
      <div>
        <h2>Post not found!</h2>
      </div>
    )
  }

  useEffect(() => {
    if (commentsStatus === 'idle') {
      dispatch(getCommentsAsync({postId}));
    }
  }, [commentsStatus, dispatch]);

  let content;

  if (commentsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (commentsStatus === 'succeeded') {
    content = comments.map((comment) => (
      <div key={comment.id} className={styles.comment}>
        <p>
          <span className={styles.comment__name}>{comment.name}</span>
          <span className={styles.comment__email}> by {comment.email}</span>
        </p>
        <p className={styles.comment__body}>{comment.body}</p>
      </div>
    ))
  } else if (commentsStatus === 'failed') {
    content = <div>{ error }</div>
  }

  return (
    <div className={styles.posts}>
      <h2>
        Post Details
      </h2>
      <div className={styles.post}>
        <p key={post.id} className={styles.posts__title}>{post.title}</p>
        <p className={styles.post__body}>{post.body}</p>
        <button>Add to favourite</button>
        <div className={styles.comments}>
          <h4 className={styles.comments__header}>Comments:</h4>
          { content }
          <AddCommentForm />
        </div>
      </div>
    </div>
  )
};

export default SinglePost;