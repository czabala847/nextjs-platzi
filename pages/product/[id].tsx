import React from "react";
import { useRouter } from "next/router";
import { ProductSummary } from "@components/ProductSummary";

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
      {product ? <ProductSummary product={product} /> : null}
    </div>
  );
};

export default ProductItem;
