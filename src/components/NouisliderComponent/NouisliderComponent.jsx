import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import "./NouisliderComponent.scss";

const MOCK_DATA = {
  from: 1,
  to: 5,
  step: 1,
};

const options = {
  connect: 'lower',
  start: [0.5],
  range: { min: 0, "15%": [MOCK_DATA.from, 1], max: MOCK_DATA.to },
  pips: {
    mode: "steps",
    values: [...new Array(MOCK_DATA.to)].map((_, i) => ++i),
    density: 100 / MOCK_DATA.to,
    filter: () => 1,
  },
  //onUpdate: (e) => {
  //  if (e[0] < 1) return;
  //  console.log(e[0]);
  //},
};

export const NouisliderComponent = () => {
  return <Nouislider {...options} />;
};
