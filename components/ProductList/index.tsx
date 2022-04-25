import React from "react";
import { Card } from "semantic-ui-react";

const ProductList = ({ data, render }) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {data.map(render)}
    </Card.Group>
  );
};

export { ProductList };
