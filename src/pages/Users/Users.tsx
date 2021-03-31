import React from "react";
import { SellerContext } from "../../contexts/SellerContext";

interface Props {}

function Users(props: Props) {
  const { name } = React.useContext(SellerContext);
  return (
    <>
      {name && <h1>Vendedor: {name}</h1>}
      <h2>Listagem de usuários</h2>
    </>
  );
}

export default Users;
