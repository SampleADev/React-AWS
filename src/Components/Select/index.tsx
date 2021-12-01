import React from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";
import "./style.css";
export interface RegisterReturnType extends React.FC {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: string;
}
export const Select = React.forwardRef<any, RegisterReturnType>(
  (props, ref) => {
    return (
      <select {...props} ref={ref} className="textFieldInput selectInput">
        {props.children}
      </select>
    );
  }
);
