import React from "react";

function TasksList({tasks}) {
  return (
    <div>
      <h2 className="display-5  text-info"> Task List</h2>
      {
        tasks.map((task,index)=><p className="lead" key={index}>{task}</p>)
      }
    </div>
  );
}

export default TasksList;
