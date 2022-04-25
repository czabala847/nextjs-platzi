import React from "react";

import { Header } from "@components/Header";

import { ProductList } from "@components/ProductList";
import { ProductItem } from "@components/ProductItem";

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
      <Header />
      <ProductList
        data={productList}
        render={(product) => <ProductItem key={product.id} info={product} />}
      />
    </div>
  );
};

export default Home;
