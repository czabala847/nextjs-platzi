import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { ContainerHeader } from "./styles";
import { Rotten } from "@components/SVGIcons/Rotten";

const HeaderModal = () => {
  return (
    <ContainerHeader>
      <Grid columns={2}>
        <Grid.Row verticalAlign={"middle"}>
          <Grid.Column width="5">
            <Rotten size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste el aguacate</Header>
            <p>Lo tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ContainerHeader>
  );
};

export { HeaderModal };
