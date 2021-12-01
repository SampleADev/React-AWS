import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormState, UseFormRegister, UseFormWatch } from "react-hook-form";
import { Button } from "../Button";
import { TextField } from "../TextField";

import { DetailsSelectField } from "./detailsSelectField";
import {
  faUserTie,
  faUserEdit,
  faArrowUp,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { TaskEntityType } from "../Tasks/tasksStore";
import { Options } from "./selectFieldsOptions";

interface FormComponentProps {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<TaskEntityType>;
  formState: FormState<TaskEntityType>;
  watch: UseFormWatch<TaskEntityType>;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  onSubmit,
  register,
  formState,
  watch,
}) => {
  const { errors } = formState;
  const priority = watch("priority");
  const type = watch("type");
  return (
    <form className="cardFormRoot" onSubmit={onSubmit}>
      <div className="cardFormLeftSide">
        <div className="cardFormTitle">
          <p className="cardFormFieldLabel"> Title </p>
          <TextField
            {...register("title", {
              required: "Field is required",
              minLength: {
                value: 3,
                message: "Title should be more than 3 symbols",
              },
            })}
            placeHolder="Your title"
            error={errors.title}
            multiple
            className="titleInput"
          />
        </div>
        <div>
          <p className="cardFormFieldLabel"> Description </p>
          <TextField
            {...register("description", {
              minLength: {
                value: 10,
                message: "Description should be more than 10 symbols",
              },
            })}
            placeHolder="Your description"
            className="descriptionInput"
            error={errors.description}
            multiple
            minRows={2}
          />
        </div>
        <div className="cardFormFooterButtons">
          <Button color="success" type="submit">
            Save
          </Button>
        </div>
      </div>
      <div className="cardFormRightSide">
        <p className="cardFormFieldLabel">Details</p>
        <div className="detailsBlock">
          <DetailsSelectField
            register={register("asignee")}
            options={Options.users}
            fieldLabel="Asignee"
            icon={<FontAwesomeIcon icon={faUserTie} />}
          />
          <DetailsSelectField
            register={register("reporter")}
            options={Options.users}
            fieldLabel="Reporter"
            icon={<FontAwesomeIcon icon={faUserEdit} />}
          />
          <DetailsSelectField
            register={register("priority")}
            options={Options.priorities}
            fieldLabel="Priority"
            icon={
              <FontAwesomeIcon
                color={`${
                  Options.priorities.find((i) => i.value === priority)?.color
                }`}
                icon={
                  Options.priorities.find((i) => i.value === priority)?.icon ||
                  faArrowUp
                }
              />
            }
          />
          <DetailsSelectField
            register={register("type")}
            options={Options.taskTypes}
            fieldLabel="Type"
            icon={
              <FontAwesomeIcon
                color={`${
                  Options.taskTypes.find((i) => i.value === type)?.color
                }`}
                icon={
                  Options.taskTypes.find((i) => i.value === type)?.icon ||
                  faCrown
                }
              />
            }
          />
          <div className="row">
            <p className="rowFieldLabel"> Time remaining </p>
            <TextField
              {...register("timeRamaining")}
              placeHolder="Time remaining"
              className="timeRemainingInput"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
