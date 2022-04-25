import React from "react";

import { Divider, Header, Table } from "semantic-ui-react";

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => {
  return (
    <section className="container">
      <Header as="h3">About this avocado</Header>
      <p>{description}</p>

      <Divider />

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(otherAttributes).map((key) => (
            <Table.Row key={key}>
              <Table.Cell className="attr-name">{key}</Table.Cell>
              <Table.Cell>
                {otherAttributes[key as keyof typeof otherAttributes]}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
};

export { ProductAttributes };
