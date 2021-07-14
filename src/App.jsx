import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from './pages/HomePage';
import SinglePost from "./components/posts/SinglePost";
import FavouritePage from './pages/FavouritePage';
import About from  "./pages/about/About";


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <HomePage />
            </React.Fragment>
          )}
        />
        <Route path="/post/:postId" component={SinglePost}/>
        <Route path="/favouritePosts" component={FavouritePage}/>
        <Route path="/about" component={About}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;