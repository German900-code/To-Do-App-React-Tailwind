import { useEffect, useState } from "react";
import AddIcon from "./assets/icons/add-icon.svg";
import DeleteAllIcon from "./assets/icons/delete-all-icon.svg";
import Button from "./components/Button";
import List from "./components/List";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // Load filter from localStorage on first render
  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return saved ? JSON.parse(saved) : "all";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [tasks, filter]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [
        ...t,
        { id: Date.now(), text: newTask, isChecked: false },
      ]);

      setNewTask("");
    }
  }

  // Remove task by id
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function onKeyDownEnter(event) {
    if (event.key === "Enter") {
      addTask();
    } else if (event.key === "Escape") {
      setNewTask("");
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.isChecked;
    if (filter === "completed") return task.isChecked;
    return true;
  });

  // Prevent clearing tasks when list is empty
  const clearAllTasks = () => {
    if (tasks.length === 0) return;
    const isConfirmed = window.confirm(
      "Do you really want to clear all tasks?",
    );
    if (isConfirmed) setTasks([]);
  };

  return (
    <div>
      <p className="text-5xl md:text-6xl lg:text-7xl text-center py-10 uppercase font-medium m-5">
        To Do List
      </p>
      <div className="h-18 w-full flex flex-col justify-center  sm:flex-row relative group gap-3 mb-5 sm:gap-5 sm:justify-center md:justify-center lg:justify-center">
        <input
          className="w-full md:w-2 sm:min-w-[280px] bg-orange-50 border border-orange-200 rounded-xl text-orange-700  px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition mr-3 md:hover:scale-105 lg:hover:scale-105"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={onKeyDownEnter}
        />
        <div className="flex flex-row items-center justify-center mb-5 gap-12 sm:justify-center sm:items-center sm:m-5">
          <Button
            icon={AddIcon}
            alt="add"
            text="Add task"
            tooltip="Add task"
            tooltipPosition="top"
            onClick={addTask}
            tasks={tasks}
            className="gap-3"
          />
          <Button
            icon={DeleteAllIcon}
            alt="clear"
            text="Clear all"
            tooltip={tasks.length === 0 ? "" : "Clear all tasks"}
            tooltipPosition="top"
            onClick={clearAllTasks}
            tasks={tasks}
            disabled={tasks.length === 0}
            className={`gap-3 ${tasks.length === 0 ? "opacity-50 cursor-not-allowed" : ""} `}
          />
        </div>
      </div>
      <Filter filter={filter} setFilter={setFilter} tasks={tasks} />
      {tasks.length == 0 ? (
        <p
          className="
           text-black text-center mt-10 md:mt-20 text-lg md:text-3xl italic"
        >
          There is no tasks yet
        </p>
      ) : (
        <List
          tasks={filteredTasks}
          deleteTask={(index) => deleteTask(index)}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setTasks={setTasks}
        />
      )}
    </div>
  );
}

export default App;
