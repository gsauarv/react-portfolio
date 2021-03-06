import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../home/Home";
import Nav from "./Nav";
import Error from "../404/Error";
import Blogs from "../blog/Blogs";
import Login from "../login/Login";
import Article from "../blog/Article";
import Project from "../project/Projects";
import Signup from "../login/Signup";
import Contacts from "../contact/Contacts";
import Screencast from "../screencasts/Screencasts";
import ProjectDesc from "../project/ProjectDesc";
const Routing = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/blogs" exact component={Blogs}></Route>
        <Route path="/contact" exact component={Contacts}></Route>
        <Route path="/screencasts" exact component={Screencast}></Route>

        <Route
          path="/admin"
          exact
          render={() =>
            (window.location = "https://admin-gsaurav.sanity.studio/desk")
          }
        ></Route>
        <Route path="/projects" exact component={Project}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route
          path="/projectDesc/:projectId"
          exact
          component={ProjectDesc}
        ></Route>

        <Route path="/article/:blogId" exact component={Article}></Route>

        <Route component={Error}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
