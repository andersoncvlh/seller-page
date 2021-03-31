import React from "react";
export interface SellerContextProp {
  name: string;
}
export const SellerContext = React.createContext<SellerContextProp>(
  {} as SellerContextProp
);
