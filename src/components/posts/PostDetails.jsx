import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { getPostAsync } from "../../app/postsSlice";
import { getCommentsAsync } from "../../app/commentsSlice";
import { useHistory, useParams, useLocation } from "react-router"
import styles from "./Posts.module.css";


const PostDetails = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const { postId } = useParams();
  const id = postId;

  useEffect(() => {
    dispatch(getPostAsync({id}));
    dispatch(getCommentsAsync({id}));
  }, [dispatch]);

  console.log(post);
  console.log(id);
  console.log(comments);

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
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <p>
                <span className={styles.comment__name}>{comment.name}</span> - <span className={styles.comment__email}>{comment.email}</span>
              </p>
              <p className={styles.comment__body}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default PostDetails;
