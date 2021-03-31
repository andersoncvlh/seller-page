import React from "react";
import { SellerContext } from "../../contexts/SellerContext";

function Home() {
  const { name } = React.useContext(SellerContext);

  return (
    <>
      {name && <h1>Vendedor: {name}</h1>}
      <h2>Início</h2>
    </>
  );
}

export default Home;
