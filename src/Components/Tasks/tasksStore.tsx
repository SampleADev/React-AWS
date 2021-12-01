import { makeAutoObservable, onBecomeObserved } from "mobx";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

export type TaskEntityType = {
  id: string;
  title: string;
  description: string;
  priority: string;
  reporter: string;
  asignee: string;
  type: string;
  timeRamaining: string;
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
    const response: {
      data: {
        listTasks: {
          items: Array<TaskEntityType>;
        };
      };
    } = yield API.graphql({
      query: queries.listTasks,
    });
    if (response && response.data && response.data.listTasks) {
      this.tasks = response.data.listTasks.items;
    }
  }

  *addTask(data: TaskEntityType) {
    yield API.graphql({
      query: mutations.createTask,
      variables: { input: { ...data } },
    });
    yield this.fetch();
  }

  *editTask(taskId: string, data: TaskEntityType) {
    //@ts-ignore
    const { createdAt, updatedAt, ...clearData } = data;
    yield API.graphql({
      query: mutations.updateTask,
      variables: { input: clearData },
    });

    yield this.fetch();
  }

  *deleteTask(taskId: string) {
    yield API.graphql({
      query: mutations.deleteTask,
      variables: { input: { id: taskId } },
    });
    yield this.fetch();
  }

  setActiveTask(data?: TaskEntityType) {
    if (data) {
      this.activeTask = { ...data };
    }
    this.activeTask = data;
  }
}

export const tasksStore = new TaskStore();
