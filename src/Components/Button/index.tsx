import React from "react";
import "./style.css";

interface ButtonProps {
  onClick: () => void;
  color?: "primary" | "secondary" | "success";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color = "primary",
  variant = "contained",
  size = "medium",
  disabled = false,
  children,
}) => {
  return (
    <button
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
