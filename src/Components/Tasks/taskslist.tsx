import React from "react";
import { TaskCardItem } from "./taskCardItem";
import { TaskEntityType } from "./tasksStore";
import "./style.css";
interface TasksListProps {
  tasks: Array<TaskEntityType>;
}
export const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
  return (
    <div className="tasksListRoot">
      {tasks.map((i) => (
        <TaskCardItem key={i.id} task={i} />
      ))}
    </div>
  );
};
