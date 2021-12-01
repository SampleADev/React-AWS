import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Select } from "../Select";

interface DetailsSelectFieldProps {
  register: UseFormRegisterReturn;
  options: Array<{ value: string; label: string }>;
  fieldLabel: string;
  icon?: React.ReactElement;
}

export const DetailsSelectField: React.FC<DetailsSelectFieldProps> = ({
  register,
  options,
  fieldLabel,
  icon,
}) => {
  return (
    <div className="row">
      <div>
        {icon ? <span className="rowFieldIcon">{icon}</span> : null}
        <span className="rowFieldLabel"> {fieldLabel} </span>
      </div>
      <Select {...register}>
        {options.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </Select>
    </div>
  );
};
