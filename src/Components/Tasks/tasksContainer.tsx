import { useObserver } from "mobx-react-lite";
import React from "react";
import { useTasksStore } from "./tasksContext";
import { TasksList } from "./taskslist";

export const TasksContainer: React.FC = () => {
  const tasksStore = useTasksStore();
  return useObserver(() => <TasksList tasks={tasksStore.tasks} />);
};
