import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import "./style.css";
import { FormComponent } from "./formComponent";
import { TaskEntityType, tasksStore } from "../Tasks/tasksStore";
import { Options } from "./selectFieldsOptions";
import { modalStore } from "../Modal/modalStore";

export const CardFormContainer: React.FC = () => {
  const { tasks, activeTask, setActiveTask, addTask, editTask } = tasksStore;

  const { setIsOpen } = modalStore;
  const { register, watch, handleSubmit, formState } = useForm<TaskEntityType>({
    defaultValues: activeTask
      ? {
          ...activeTask,
        }
      : {
          priority: Options.priorities[0].value,
          reporter: Options.users[1].value,
          asignee: Options.users[0].value,
          type: Options.taskTypes[0].value,
        },
  });

  const onSubmit = (data: TaskEntityType) => {
    if (data) {
      if (tasks.findIndex((i) => i.id === data.id) > -1) {
        editTask(data.id, { ...data });
        setIsOpen(false)();
        return;
      }
      addTask({ ...data, id: nanoid() });
      setIsOpen(false)();
    }
  };

  React.useEffect(() => {
    return () => setActiveTask();
  }, []);
  return (
    <FormComponent
      watch={watch}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      formState={formState}
    />
  );
};
