import React from "react";
import { Button } from "semantic-ui-react";
import Link from "next/link";

import { ContainerYesNo } from "./styles";
import { HeaderYesNo } from "./styles";

const YesOrNo = () => {
  const [result, setResult] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [triggerCount, setTriggerCount] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        "https://platzi-avo.vercel.app/api/yes-or-no"
      );
      const { data } = await response.json();
      setResult(data);
      setLoading(false);
    }

    fetchData();
  }, [triggerCount]);

  const handleClick = () => setTriggerCount(triggerCount + 1);

  return (
    <ContainerYesNo>
      <HeaderYesNo as="h1" color={loading ? "grey" : "green"}>
        {result}
      </HeaderYesNo>

      <p>
        <Button
          color="green"
          loading={loading}
          disabled={loading}
          onClick={handleClick}
        >
          Intentar de nuevo
        </Button>
      </p>

      <p>
        <Link href="/">
          <a className="ui black button basic">Volver al inicio</a>
        </Link>
      </p>
    </ContainerYesNo>
  );
};

export default YesOrNo;
