import React from "react";
// import logo from "./logo.svg";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { PoductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HelpPage } from "./screens/helpPage";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/products">ProductsPage</Link>
        </li>
        <li>
          <Link to="/orders">OrdersPage</Link>
        </li>
        <li>
          <Link to="/member-page">userPage</Link>
        </li>
        <li>
          <Link to="/help">HelpPage</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/products">
          <PoductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
