import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const id = router.query.id;
  const [product, setProduct] = React.useState<TProduct>();

  React.useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(`/api/avo/${router.query.id}`);
        const avo = await response?.json();

        setProduct(avo);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      fetchApi();
    }
  }, [id]);

  return (
    <div className="ProductItem">
      {product ? (
        <>
          <h2>Producto {product.id}</h2>
          <ul>
            <li>Nombre: {product.name}</li>
            <li>sku: {product.sku}</li>
            <li>Precio: {product.price}</li>
          </ul>
        </>
      ) : (
        <p>No existe el producto.</p>
      )}
    </div>
  );
};

export default ProductItem;
