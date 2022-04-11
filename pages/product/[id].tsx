import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {

    const router = useRouter();

    return (
        <h2>Capturando el id {router.query.id}</h2>
    )
}

export default ProductItem;