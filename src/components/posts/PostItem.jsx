import React from "react";
import styles from "./Posts.module.css";
import { Link } from "react-router-dom";


const PostItem = ({id, title, body}) => {
  return (
    <div className={styles.post}>
      <Link to={`/post/${id}`}>
        <p className={styles.posts__title}>{title}</p>
      </Link>
    </div>
  )
};

export default PostItem;