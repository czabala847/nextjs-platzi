import React from "react";

import { Header } from "@components/Header";
import { Container } from "semantic-ui-react";

const Home = () => {
  const [productList, setProductList] = React.useState<TProduct[]>([]);

  React.useEffect(() => {
    async function fetchApi() {
      const response = await fetch("/api/avo");
      const { data } = await response.json();
      setProductList(data);
    }

    fetchApi();
  }, []);

  return (
    <div className="Home">
      <Container text>
        <Header />
        <ul>
          {productList.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Home;
