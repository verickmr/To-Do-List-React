import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";
import Header from "./componets/Header";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Progrmação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTask);
  };

  const handleTaskAddtion = (tasktitle) => {
    const newTask = [
      ...tasks,
      {
        title: tasktitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAddtion={handleTaskAddtion} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
        />
      </div>
    </>
  );
};

export default App;
