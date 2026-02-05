import { useEffect, useState } from "react";
import AddIcon from "./assets/add-icon.svg";
import DeleteAllIcon from "./assets/delete-all-icon.svg";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // function addTask() {
  //   if (newTask.trim() !== "") {
  //     setTasks((t) => [...t, newTask]);
  //     setNewTask("");
  //   }
  // }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [
        ...t,
        { id: Date.now(), text: newTask, isChecked: false },
      ]);

      setNewTask("");
    }
  }

  function deleteTask(id) {
    // const updatedTasks = tasks.filter((_, i) => i !== id);
    // setTasks(updatedTasks);
    const filteredTasks = (prev) => prev.filter((task) => task.id !== id);
    setTasks(filteredTasks);
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
      {/* <p className="text-7xl text-center p-15 uppercase font-medium"> */}
      <p className="text-3xl sm:text-4xl md:text-6xl text-center py-8 uppercase font-medium">
        To Do List
      </p>
      {/* <div className="flex relative group flex-wrap justify-center gap-5 "> */}
      <div className="flex flex-col sm:flex-row relative group justify-center gap-3 sm:gap-5">
        <input
          // className="bg-orange-50 border border-orange-200 rounded-xl text-black p-3 text-xl h-21 focus:outline-none focus:right-2 focus:ring-orange-300 hover:scale-105 transition-transform"
          className="w-full sm:w-auto sm:min-w-[280px] bg-orange-50 border border-orange-200 rounded-xl text-black px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={onKeyDownEnter}
        />
        <Button
          icon={AddIcon}
          alt="add"
          text="Add task"
          tooltip="Add task"
          tooltipPosition="top"
          onClick={addTask}
        />
        <Button
          icon={DeleteAllIcon}
          alt="clear"
          text="Clear all tasks"
          tooltip="Clear all tasks"
          tooltipPosition="top"
          onClick={() => setTasks([])}
        />
      </div>
      {tasks.length == 0 ? (
        // <p className="text-black text-center mt-20 text-3xl italic">
        <p
          className="
           text-black text-center mt-10 md:mt-20 text-lg md:text-3xl italic"
        >
          There is no tasks yet
        </p>
      ) : (
        <List
          tasks={tasks}
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
