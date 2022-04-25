import React from "react";
import { Input, Transition, Icon } from "semantic-ui-react";

import { useAppContext } from "store/AppProvider";

const AddToCard = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState("");
  const { cart, onSaveToCart } = useAppContext();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(target.value));
  };

  const handleSubmit = () => {
    setError(validateInput(quantity));

    if (!error) {
      setLoading(true),
        addToCartRequest()
          .then(() => {
            onSaveToCart(product, quantity);
            setLoading(false);
            setVisible(true);
            toggleMessage();
          })
          .catch((err: Error) => {
            setError(`Error: ${err}` || "Something went wrong");
            setLoading(false);
          });
    }

    console.log("cart", cart);
  };

  const validateInput = (quantity: number) => {
    let error = "";
    if (quantity < 1) error = "Can't be blank";

    return error;
  };

  // Fake a server Response, we don't care on this project
  // about data persistency, but you may add it :)
  const addToCartRequest = () =>
    new Promise((resolve, reject) => {
      window.setTimeout(resolve, 600);
    });

  return (
    <>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        set={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: "green",
          content: "Add to Cart",
          icon: "plus cart",
          onClick: handleSubmit,
          loading,
          disabled: loading,
        }}
      />
      {error && (
        <div style={{ color: "red", position: "absolute" }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: "green", position: "absolute" }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
    </>
  );
};

export { AddToCard };
