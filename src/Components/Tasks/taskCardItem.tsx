import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent } from "react";
import { Card } from "../Card/Card";
import { useModalStore } from "../Modal/state/modalContext";
import { useTasksStore } from "./tasksContext";
import { TaskEntityType } from "./tasksStore";

interface TaskItemProps {
  task: TaskEntityType;
}
export const TaskCardItem: React.FC<TaskItemProps> = ({ task }) => {
  const tasksStore = useTasksStore();
  const modalStore = useModalStore();
  const delBtnRef = React.useRef<HTMLElement | null>(null);
  const handleClick = (taskId: string) => (e?: MouseEvent) => {
    e?.stopPropagation();
    if (e?.target !== delBtnRef.current?.childNodes[0].childNodes[0]) {
      const activeTask = tasksStore.tasks.find((i) => i.id === taskId);
      if (activeTask) {
        tasksStore.setActiveTask(activeTask);
      }
      modalStore.setIsOpen(true)();
    }
  };
  const handleDelete = (taskId: string) => () => {
    tasksStore.deleteTask(taskId);
  };

  return (
    <Card className="cardItemRoot" onClick={handleClick(task.id)}>
      <div className="cardHeader">
        <p className="taskItemTitle">{task.title}</p>
      </div>
      <div className="cardBody">
        <p className="taskItemDescription">{task.description}</p>
      </div>
      <div
        ref={(ref) => (delBtnRef.current = ref)}
        className="deleteIconButton"
        onClick={handleDelete(task.id)}
      >
        <FontAwesomeIcon color="#c62828" icon={faTrashAlt} />
      </div>
    </Card>
  );
};
