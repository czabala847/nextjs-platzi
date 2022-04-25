import React from "react";
import { useAppContext } from "store/AppProvider";
import { CardItemList } from "@components/CardItemList";

import { Divider } from "semantic-ui-react";

const Cart = () => {
  const { cart, count } = useAppContext();

  return (
    <div className="Cart">
      <CardItemList items={cart} />
      <Divider />
    </div>
  );
};

export default Cart;
