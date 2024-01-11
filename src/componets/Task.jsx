import React from "react";
import { CgClose,  } from "react-icons/cg";
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid #7fff00" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="remove-task">
      
        <button
          className="remove-task-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
