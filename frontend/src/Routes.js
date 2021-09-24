import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUser from "./Screens/AddUser";
import Home from "./Screens/Home";
import Users from "./Screens/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />x
        <Route exact path="/users" component={Users} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
