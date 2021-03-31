import React from "react";
import { SellerContext } from "../../contexts/SellerContext";

interface Props {}

function About(props: Props) {
  const { name } = React.useContext(SellerContext);
  return (
    <>
      {name && <h1>Vendedor: {name}</h1>}
      <h2>Sobre o sistema</h2>
    </>
  );
}

export default About;
