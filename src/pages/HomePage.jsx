import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { selectAllPosts, selectPostsStatus, getPostsAsync } from "../app/postsSlice";
import PostList from "../components/posts/PostList";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostsStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(getPostsAsync());
    }
  }, [postStatus, dispatch]);

  const props = {
    posts: posts,
    postStatus,
    postTypes: "Latest Posts",
  }

  return (
    <section>
      <PostList {...props}/>
    </section>
  )
};

export default HomePage;