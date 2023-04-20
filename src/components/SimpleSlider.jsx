import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import './nouislider-react.scss';

const options = {
  connect: [true, false],
  start: [0.5],
  range: { min: 0, '15%': [1, 1], max: 6 },
  pips: { mode: 'steps', values: [...new Array(6)].map((_, i) => ++i), density: 100 / 6, filter: () => 1},
  onUpdate: (e) => {
    if (e[0] < 1) return
    console.log(e[0])
  },
};

export const SimpleSlider = () => (
  <Nouislider {...options} />
);