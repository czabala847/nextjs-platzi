import React from "react";
import Link from "next/link";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const Footer: React.FC = () => {
  return (
    <Segment
      vertical
      as="footer"
      style={{
        padding: "4em 0em",
        marginTop: "3em",
        borderTop: "1px solid #f2f2f2",
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h4" content="Nosotros" />
              <List>
                <List.Item>
                  <Link href="/about">
                    <a>Conoce más</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="Servicios" />
              <List>
                <List.Item>
                  <Link href="/">
                    <a>Todos los productos</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Hecho para</Header>
              <p>
                <a href="https://platzi.com/">Platzi y su curso de Next.JS</a>{" "}
                de Platzi dictado por{" "}
                <a href="https://twitter.com/jonalvarezz">@jonalvarezz</a>
              </p>
              <List horizontal style={{ display: "flex" }}>
                <List.Item
                  icon="github"
                  style={{ display: "flex" }}
                  content={
                    <a href="https://github.com/jonalvarezz/platzi-nextjs">
                      GitHub
                    </a>
                  }
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export { Footer };
