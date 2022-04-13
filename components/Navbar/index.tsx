import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container } from "semantic-ui-react";

import { Avocado } from "@components/SVGIcons/Avocado";
import { Basket } from "@components/SVGIcons/Basket";
import { Nav } from "./styles";

const Navbar = () => {
  const { pathname } = useRouter();

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
              <Basket /> Canasta (0)
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export { Navbar };
