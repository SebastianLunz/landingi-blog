import React from 'react';
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import PostList from "./components/posts/PostList";
import SinglePost from "./components/posts/SinglePost";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <PostList />
            </React.Fragment>
          )}
        />
        <Route exact path="/post/:postId" component={SinglePost}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;