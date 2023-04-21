import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import './style.scss';

const tipFormatter = (value) => {
  return value;
};

export const CustomSlider = () => {
  React.useEffect(() => {
    const dots = document.querySelectorAll(".rc-slider-dot");

    dots.forEach((dot) => {
      dot.insertAdjacentHTML('afterbegin', '<div class="pointHint" data-custom-tooltip="HOHOHO">&nbsp;</div>')
    } );
  }, []);

  return (
    <div className="root">
      <Slider
        startPoint={0}
        defaultValue={0.5}
        min={0}
        max={6}
        marks={{
          0.5: { style: { display: "none" }, label: 0.5 },
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
        }}
        tipProps={{
          placement: "top",
          prefixCls: "rc-slider-tooltip",
          overlay: tipFormatter(1),
        }}
      />
    </div>
  );
};
