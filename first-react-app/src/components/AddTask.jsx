import { useState } from "react";
import { useForm } from "react-hook-form";

function AddTask({tasks,setTasks}) {
  
  let { register, handleSubmit } = useForm();

  function addNewTask(taskObj) {
    setTasks([...tasks, taskObj.newTask]);
  }

  console.log(tasks);

  return (
    <div className="bg-light p-3">
      <h2 className="display-5  text-info">Add Task</h2>
      {/* form */}
      <form onSubmit={handleSubmit(addNewTask)}>
        <input
          type="text"
          {...register("newTask")}
          className="form-control mb-4"
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
