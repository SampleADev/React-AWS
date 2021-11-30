import { useLocalStore } from "mobx-react-lite";
import React from "react";
import { createTaskStore, TasksStoreI } from "./tasksStore";

const TasksContext = React.createContext<TasksStoreI>(createTaskStore());

export const TasksProvider: React.FC = ({ children }) => {
  const tasksStore = useLocalStore(createTaskStore);
  return (
    <TasksContext.Provider value={tasksStore}>{children}</TasksContext.Provider>
  );
};

export const useTasksStore = () => React.useContext(TasksContext);
