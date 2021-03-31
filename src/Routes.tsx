import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { SellerContext, SellerContextProp } from "./contexts/SellerContext";
import useQuery from "./hooks/UseQuery";
import About from "./pages/About/About";
import Home from "./pages/home/Home";
import Users from "./pages/Users/Users";

function Routes() {
  const query = useQuery();
  const seller = query.get("seller");
  const prop: SellerContextProp = {
    name: seller || "",
  };
  return (
    <SellerContext.Provider value={prop}>
      <Nav />
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
    </SellerContext.Provider>
  );
}

export default Routes;
