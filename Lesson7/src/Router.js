import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import Home from "./components/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <header className="header">
        header
        <ul>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/chats">chats</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/chats">
          <Chats />
        </Route>

        <Route path="/chats/:chatId">
          <Chats />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
