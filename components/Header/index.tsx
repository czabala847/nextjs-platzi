import React from "react";

import { Transition, Header as HeaderUI, Confirm } from "semantic-ui-react";
import { ContainerHeader } from "./styles";

import { Avocado } from "@components/SVGIcons/Avocado";
import { Rotten } from "@components/SVGIcons/Rotten";

import { HeaderModal } from "./HeaderModal";
import { useHeaderActions } from "./useHeaderActions";

const Header: React.FC = () => {
  const { info, actions } = useHeaderActions();
  const { rotten, visibleAnimation, showModal } = info;
  const { handleClick, closeModal } = actions;

  let Icon = rotten ? Rotten : Avocado;

  return (
    <ContainerHeader>
      <HeaderUI
        size="huge"
        as="h1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Platzi
        <Transition
          animation={"jiggle"}
          duration={900}
          visible={visibleAnimation}
        >
          <Icon size="58px" onClick={handleClick} />
        </Transition>
        Avo
      </HeaderUI>

      <Confirm
        open={showModal}
        content={HeaderModal}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
        closeOnDimmerClick={false}
      />
    </ContainerHeader>
  );
};

export { Header };
