import React, { MouseEvent } from "react";
import "./style.css";

interface CardProps {
  onClick?: (e?: MouseEvent) => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, onClick, className }) => {
  return (
    <div className={`card-root ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
