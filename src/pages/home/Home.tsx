import React from "react";
import { SellerContext } from "../../contexts/SellerContext";

function Home() {
  const { name } = React.useContext(SellerContext);
  return <h1>Início {name}</h1>;
}

export default Home;
