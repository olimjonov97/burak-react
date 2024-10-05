import React from "react";
// import logo from "./logo.svg";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { About } from "./screens/About";
import { Home } from "./screens/Home";
import { Users } from "./screens/Users";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}






export default App;
