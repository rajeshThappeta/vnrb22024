import React, { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function ManageTasks() {

    let [tasks, setTasks] = useState([]);

  return (
    <div className="text-center">
      <h1 className="display-3">ManageTasks</h1>
      {/* nest 3 components */}
      <div className="d-flex justify-content-around mt-5">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} />
        <TasksCount tasks={tasks} />
      </div>
    </div>
  );
}

export default ManageTasks;
