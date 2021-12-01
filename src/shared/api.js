class Api {
  url = "";

  performRequest(url, method = "GET", body) {
    return fetch(url, {
      method,
      body: JSON.stringify(body),
      //   headers:
    }).then((response) => response.json());
  }

  getTasks() {
    return this.performRequest("url");
  }

  addNewTask(data) {
    return this.performRequest("url", "POST", { ...data });
  }

  editTask(taskId, data) {
    return this.performRequest(`url/${taskId}`, "PUT", { ...data });
  }

  deleteTask(taskId) {
    return this.performRequest(`url/${taskId}`, "DELETE");
  }
}
export default new Api();
