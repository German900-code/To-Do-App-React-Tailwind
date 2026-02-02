import { useState } from "react";
import AddIcon from "./assets/add-icon.svg";
import DeleteAllIcon from "./assets/delete-all-icon.svg";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function onKeyDownEnter(event) {
    if (event.key === "Enter") {
      addTask();
    } else if (event.key === "Escape") {
      setNewTask("");
    }
  }

  return (
    <div>
      <p className="text-7xl text-center p-15 uppercase font-medium">
        To Do List
      </p>
      <div className="flex relative group flex-wrap justify-center gap-5">
        <input
          className="bg-orange-50 border border-orange-200 rounded-xl text-black p-3 text-xl h-21 focus:outline-none focus:right-2 focus:ring-orange-300 hover:scale-105 transition-transform"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={onKeyDownEnter}
        />
        <Button
          icon={AddIcon}
          alt="add"
          tooltip="Add task"
          tooltipPosition="top"
          onClick={addTask}
        />
        <Button
          icon={DeleteAllIcon}
          alt="clear"
          tooltip="Clear all tasks"
          tooltipPosition="top"
          onClick={() => setTasks([])}
        />
      </div>
      {tasks.length == 0 ? (
        <p className="text-black text-center mt-20 text-3xl italic">
          There is no tasks yet
        </p>
      ) : (
        <List tasks={tasks} deleteTask={(index) => deleteTask(index)} />
      )}
    </div>
  );
}

export default App;
