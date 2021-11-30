import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import "./style.css";
import { FormComponent } from "./formComponent";
import { TaskEntityType } from "../Tasks/tasksStore";
import { Options } from "./selectFieldsOptions";
import { useTasksStore } from "../Tasks/tasksContext";
import { useModalStore } from "../Modal/state/modalContext";

export const CardFormContainer: React.FC = () => {
  const taskStore = useTasksStore();
  const modalStore = useModalStore();
  const { register, watch, handleSubmit, formState } = useForm<TaskEntityType>({
    defaultValues: taskStore.activeTask
      ? {
          ...taskStore.activeTask,
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
      if (taskStore.tasks.findIndex((i) => i.id === data.id) > -1) {
        taskStore.editTask(data.id, { ...data });
        modalStore.setIsOpen(false)();
        return;
      }
      taskStore.addTask({ ...data, id: nanoid() });
      modalStore.setIsOpen(false)();
    }
  };

  React.useEffect(() => {
    return () => taskStore.setActiveTask();
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
