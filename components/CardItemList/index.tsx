import React from "react";
import { Message, Item, Button } from "semantic-ui-react";
import Link from "next/link";

const CardItemList = ({ items }) => {
  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    );

  const mapCartItemsToItems = (items) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem;

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link href={`/product/${id}/`}>
              <a>{name}</a>
            </Link>
          </Item.Header>
        ),
        image: (
          <Item.Image
            src={image}
            alt={name}
            size="small"
            style={{ background: "#f2f2f2" }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: "Some more information goes here....",
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            // onClick={() => removeFromCart(cartItem)}
          />
        ),
      };
    });

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />;
};

export { CardItemList };
