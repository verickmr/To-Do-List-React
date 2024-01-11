import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddtion}) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddtion(inputData)
    setInputData("")
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
