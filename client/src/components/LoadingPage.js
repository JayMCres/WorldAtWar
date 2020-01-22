import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const LoadingPage = () => (
  <Dimmer active>
    <Loader size="mini" content={"Preparing Weapons System Info..."} />
  </Dimmer>
);

export default LoadingPage;
