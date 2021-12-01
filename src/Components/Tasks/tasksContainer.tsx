import { observer } from "mobx-react-lite";
import React from "react";
import { TasksList } from "./taskslist";
import { tasksStore } from "./tasksStore";

export const TasksContainer: React.FC = observer(() => {
  const { tasks } = tasksStore;
  return <TasksList tasks={tasks} />;
});
