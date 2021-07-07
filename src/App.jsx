import React from 'react';
import "./App.css";
import About from  "./components/about/About.jsx";
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
        <Route exact path="/about" component={About}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;