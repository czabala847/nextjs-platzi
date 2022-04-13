import React from "react";

const useHeaderActions = () => {
  const [rotten, setRotten] = React.useState<Boolean>(false);
  const [count, setCount] = React.useState(0);
  const [visibleAnimation, setVisibleAnimation] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (count >= 3) {
      setRotten(!rotten);
      setShowModal(true);
    }
  }, [count]);

  const handleClick = () => {
    setVisibleAnimation((prev) => !prev);

    if (rotten) {
      setCount(0);
      setRotten(false);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const closeModal = () => setShowModal(false);

  return {
    info: {
      rotten,
      visibleAnimation,
      showModal,
    },
    actions: { handleClick, closeModal },
  };
};

export { useHeaderActions };
