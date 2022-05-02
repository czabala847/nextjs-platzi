import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "semantic-ui-react";

const ProductItem = ({ info }) => {
  return (
    <Link href={`product/${info.id}`} passHref>
      <Card
        as="a"
        header={info.name}
        image={{
          children: <Image src={info.image} width={333} height={333} />,
        }}
        meta={{
          children: (
            <Card.Meta style={{ color: "dimgray" }}>{info.price}</Card.Meta>
          ),
        }}
      />
    </Link>
  );
};

export { ProductItem };
