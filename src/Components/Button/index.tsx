import React from "react";
import "./style.css";

interface ButtonProps {
  onClick?: () => void;
  color?: "primary" | "secondary" | "success" | "grey";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color = "primary",
  variant = "contained",
  size = "medium",
  disabled = false,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-root btn-${color} btn-${variant} btn-${size} ${
        disabled ? "btn-disabled" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
