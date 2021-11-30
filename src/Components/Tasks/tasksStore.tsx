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

export function createTaskStore(): TasksStoreI {
  return {
    tasks: [],
    activeTask: undefined,
    addTask(data: TaskEntityType) {
      const tasksCopy = [...this.tasks];
      this.tasks = [...tasksCopy, { ...data }];
    },
    editTask(taskId: string, data: TaskEntityType) {
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
    },
    deleteTask(taskId: string) {
      const index = this.tasks.findIndex((i) => i.id === taskId);
      const tasksCopy = [...this.tasks];
      this.tasks = [
        ...tasksCopy.slice(0, index),
        ...tasksCopy.slice(index + 1),
      ];
    },
    setActiveTask(data?: TaskEntityType) {
      if (data) {
        this.activeTask = { ...data };
      }
      this.activeTask = data;
    },
  };
}
