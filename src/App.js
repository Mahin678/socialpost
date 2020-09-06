import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './Components/Banner/Banner';
import Post from './Components/Post/Post';
import Categorys from './Components/Categorys/Categorys';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from './Components/Comments/Comments';
import Allpost from './Components/AllPost/Allpost';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar/PrimarySearchAppBar';
import { Box } from '@material-ui/core';


function App() {

  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/Home">
            <Banner></Banner>
            <Box  className="wrapper  " display="flex">
              <div className="postComponent w-75 mt-4">
                <Post></Post>
              </div>
              <div className="categoryComponent" >
                <Categorys></Categorys>
              </div>
            </Box>
          </Route>
          <Route path="/Post">
            <Banner></Banner>
            <Allpost></Allpost>
          </Route>
          <Route path="/comment/:id">
            <Comments></Comments>
          </Route>
          <Route path="/About Project">
            <h1>Site is comming</h1>
          </Route>
          <Route exact path="/">
          <Banner></Banner>
    <Box className="wrapper" display="flex" >
    <div className="postComponent w-75  ">
                <Post></Post>
              </div>
              <div className="categoryComponent" >
                <Categorys></Categorys>
              </div>
    </Box>
          </Route>
          <Route path="*" >
            <h1> Site is not found (404)</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
