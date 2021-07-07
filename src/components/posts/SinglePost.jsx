import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../../app/postsSlice";
import { selectCommentsByPostId, selectCommentsStatus, } from "../../app/commentsSlice";
import styles from "./Posts.module.css";
import AddCommentForm from "../comments/AddCommentForm";


const SinglePost = ({ match }) => {
  const postId = parseInt(match.params.postId);
  const post = useSelector(state => selectPostById(state, postId));
  const comments = useSelector(state => selectCommentsByPostId(state, postId));
  const commentsStatus = useSelector(selectCommentsStatus);

  if (!post) {
    return (
      <div>
        <h2>Post not found!</h2>
      </div>
    )
  }

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
        <div className={styles.comments}>
          <h4 className={styles.comments__header}>Comments:</h4>
          { content }
          <h4 className={styles.comment__formHeader}>Add a New Comment</h4>
          <div className={styles.comment__form}>
            <AddCommentForm postId={postId}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SinglePost;