import React from "react";
import { Link } from "react-router-dom";
import { SellerContext } from "../../contexts/SellerContext";

function Nav() {
  const { name } = React.useContext(SellerContext);
  const search = name ? `?seller=${name}` : "";
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/",
                search,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/about",
                search,
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/users",
                search,
              }}
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
