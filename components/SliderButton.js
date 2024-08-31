import React from "react";

const SliderButton = ({ onClick, icon }) => {
  return (
    <button
      style={{ backgroundColor: "#C0DECE", color: "black" }}
      className="slider-button"
      onClick={onClick}
    >
      <span className="button-icon">{icon}</span>
    </button>
  );
};

export default SliderButton;
