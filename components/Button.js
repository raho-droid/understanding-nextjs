import React from "react";

const Button = ({
  bgColor,
  color,
  icon,
  name,
  onClick,
  iconPosition = "left",
}) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      className="custom-button"
      onClick={onClick}
    >
      {iconPosition === "left" && icon && (
        <span className="button-icon">{icon}</span>
      )}
      <span className="button-name">{name}</span>
      {iconPosition === "right" && icon && (
        <span className="button-icon">{icon}</span>
      )}
    </button>
  );
};

export default Button;
