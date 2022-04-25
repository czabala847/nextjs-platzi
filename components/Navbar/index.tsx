import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container } from "semantic-ui-react";

import { Avocado } from "@components/SVGIcons/Avocado";
import { ShoppingCartIcon } from "./ShoppingCartIcon";

import { useAppContext } from "store/AppProvider";

const Navbar = () => {
  const { pathname } = useRouter();
  const { count } = useAppContext();

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/">
          <Menu.Item
            name="home"
            active={pathname === "/"}
            title="Inicio | Todos los productos."
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link href="/cart">
            <Menu.Item active={pathname === "/cart"}>
              <ShoppingCartIcon cartCount={count} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export { Navbar };
