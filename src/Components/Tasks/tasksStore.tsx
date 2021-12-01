import { makeAutoObservable, onBecomeObserved } from "mobx";
import api from "../../shared/api";

export type TaskEntityType = {
  id: string;
  title: string;
  description: string;
  priority: string;
  reporter: string;
  asignee: string;
  type: string;
  timeRemaining: string;
};

export interface TasksStoreI {
  tasks: Array<TaskEntityType>;
  activeTask: TaskEntityType | undefined;
  addTask: (task: TaskEntityType) => void;
  editTask: (taskId: string, task: TaskEntityType) => void;
  deleteTask: (taskId: string) => void;
  setActiveTask: (task?: TaskEntityType) => void;
}

class TaskStore {
  tasks: Array<TaskEntityType> = [];
  activeTask: TaskEntityType | undefined = undefined;

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );
    onBecomeObserved(this, "tasks", this.fetch);
  }

  *fetch() {
    const response: { tasks: Array<TaskEntityType> } = yield api.getTasks();

    // this.tasks = response.tasks;
  }

  *addTask(data: TaskEntityType) {
    const tasksCopy = [...this.tasks];
    this.tasks = [...tasksCopy, { ...data }];
    // yield api.addNewTask(data)
    // yield this.fetch()
  }

  *editTask(taskId: string, data: TaskEntityType) {
    // yield api.editTask(taskId, data);
    // yield this.fetch();
    const index = this.tasks.findIndex((i) => i.id === taskId);
    const tasksCopy = [...this.tasks];
    this.tasks = [
      ...tasksCopy.slice(0, index),
      {
        ...tasksCopy[index],
        ...data,
      },
      ...tasksCopy.slice(index + 1),
    ];
  }

  *deleteTask(taskId: string) {
    yield api.deleteTask(taskId);
    const index = this.tasks.findIndex((i) => i.id === taskId);
    const tasksCopy = [...this.tasks];
    this.tasks = [...tasksCopy.slice(0, index), ...tasksCopy.slice(index + 1)];
  }

  setActiveTask(data?: TaskEntityType) {
    if (data) {
      this.activeTask = { ...data };
    }
    this.activeTask = data;
  }
}

export const tasksStore = new TaskStore();
