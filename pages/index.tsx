import React from "react";

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
      <h1>Home</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
