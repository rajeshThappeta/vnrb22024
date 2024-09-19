import React from 'react'

function TasksCount({tasks}) {
  return (
    <div>
         <h2 className="display-5  text-info">Tasks count</h2>
         <p className="lead fs-1">{tasks.length}</p>
    </div>
  )
}

export default TasksCount