import React from "react";
import { useSelector } from "react-redux";
import { selectFavouritePosts, selectPostsStatus } from "../app/postsSlice";
import PostList from "../components/posts/PostList";

const FavouritePage = () => {
  const favouritePosts = useSelector(selectFavouritePosts);
  const postStatus = useSelector(selectPostsStatus);

  const props = {
    posts: favouritePosts,
    postStatus,
    postTypes: "Favourite Posts",
  }

  return (
    <section>
      <PostList {...props}/>
    </section>
  )
};

export default FavouritePage;