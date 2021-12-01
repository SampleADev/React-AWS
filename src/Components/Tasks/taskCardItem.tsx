import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent } from "react";
import { truncate } from "../../shared/truncate";
import { Card } from "../Card/Card";
import { Options } from "../CardForm/selectFieldsOptions";
import { modalStore } from "../Modal/modalStore";
import { TaskEntityType, tasksStore } from "./tasksStore";
import { faArrowsAltH, faCrown } from "@fortawesome/free-solid-svg-icons";
import { getOption } from "../../shared/getOption";

interface TaskItemProps {
  task: TaskEntityType;
}

export const TaskCardItem: React.FC<TaskItemProps> = ({ task }) => {
  const { tasks, setActiveTask, deleteTask } = tasksStore;
  const { setIsOpen } = modalStore;
  const delBtnRef = React.useRef<HTMLElement | null>(null);

  const handleClick = (taskId: string) => (e?: MouseEvent) => {
    e?.stopPropagation();
    if (
      e?.target !== delBtnRef.current?.childNodes[0].childNodes[0] &&
      e?.target !== delBtnRef.current?.childNodes[0]
    ) {
      const activeTask = tasks.find((i) => i.id === taskId);
      if (activeTask) {
        setActiveTask(activeTask);
      }
      setIsOpen(true)();
    }
  };
  const handleDelete = (taskId: string) => () => {
    deleteTask(taskId);
  };

  return (
    <Card className="cardItemRoot" onClick={handleClick(task.id)}>
      <div className="cardHeader">
        <p className="cardIdRow">
          {
            <FontAwesomeIcon
              color={getOption(Options.priorities, task.priority)?.color}
              icon={
                getOption(Options.priorities, task.priority)?.icon ||
                faArrowsAltH
              }
            />
          }
          {
            <FontAwesomeIcon
              color={getOption(Options.taskTypes, task.type)?.color}
              icon={getOption(Options.taskTypes, task.type)?.icon || faCrown}
            />
          }
        </p>
        <p className="taskItemTitle">{truncate(task.title, 15)}</p>
      </div>
      <div className="cardBody">
        <p className="taskItemDescription">{truncate(task.description, 30)}</p>
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
