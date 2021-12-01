import React from "react";
import { FieldError } from "react-hook-form";
import { RegisterReturnType } from "../Select";
import TextareaAutosize from "react-textarea-autosize";
import "./style.css";

interface TextFieldProps {
  error?: FieldError;
  placeHolder: string;
  minRows?: number;
  multiple?: boolean;
  className: string;
}
type TextFieldType = RegisterReturnType & TextFieldProps;
export const TextField = React.forwardRef<any, TextFieldType>((props, ref) => {
  const { error, multiple = false } = props;
  if (multiple) {
    return (
      <div>
        <TextareaAutosize
          {...props}
          ref={ref}
          className={`textFieldInput ${props.className} ${
            !!error ? "error" : ""
          }`}
        />
        {error?.message && <p className="fieldErrorMessage">{error.message}</p>}
      </div>
    );
  }
  return (
    <div>
      <input
        {...props}
        ref={ref}
        className={`textFieldInput ${props.className} ${
          !!error ? "error" : ""
        }`}
      />
      {error?.message && <p className="fieldErrorMessage">{error.message}</p>}
    </div>
  );
});
