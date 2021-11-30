import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./Components/Modal/state/modalContext";
import { TasksProvider } from "./Components/Tasks/tasksContext";

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
