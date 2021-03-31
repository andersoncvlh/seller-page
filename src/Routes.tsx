import React from "react";
import { Switch, Route } from "react-router-dom";
import { SellerContext, SellerContextProp } from "./contexts/SellerContext";
import useQuery from "./hooks/UseQuery";
import Home from "./pages/home/Home";

function Routes() {
  const query = useQuery();
  const seller = query.get("seller");
  const prop: SellerContextProp = {
    name: seller || "",
  };
  return (
    <SellerContext.Provider value={prop}>
      <Switch>
        <Route path="/about">Sobre a aplicação</Route>
        <Route path="/users">Usuários</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </SellerContext.Provider>
  );
}

export default Routes;
