import React from "react";
import "./style.css";

interface CardProps {
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div className={"card-root"} onClick={onClick}>
      {children}
    </div>
  );
};
