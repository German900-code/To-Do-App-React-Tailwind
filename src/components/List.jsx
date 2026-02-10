import DeleteIcon from "../assets/icons/delete-icon.svg";
import Button from "./Button";

function List({ tasks, deleteTask, setTasks }) {
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task,
      ),
    );
  }

  return (
    <ul className="mt-10 m-5 flex flex-wrap gap-5 justify-center">
      {tasks.map((task, index) => (
        <li
          key={task.id}
          className="
            bg-orange-100 rounded-xl
            p-7
            flex flex-col gap-7 duration-200
          transition-all opacity-100 md:hover:scale-110 lg:hover:scale-110"
        >
          <div className="flex items-center justify-between gap-3">
            <span
              onClick={() => toggleTask(task.id)}
              className={`
                text-xl font-bold uppercase cursor-pointer
                transition
                ${
                  task.isChecked
                    ? "line-through text-gray-400"
                    : "text-neutral-800"
                }
              `}
            >
              {index + 1}. {task.text}
              <span
                className={`
                  absolute left-0 top-1/2 h-[2px] bg-neutral-400
                  transition-all duration-1000
                   ${task.isChecked ? "w-auto" : "w-0"}
                `}
              />
            </span>

            <input
              type="checkbox"
              checked={task.isChecked}
              onChange={() => toggleTask(task.id)}
              className="w-6 h-6 cursor-pointer accent-orange-600"
            />
          </div>

          <div className="flex justify-center items-center">
            <Button
              icon={DeleteIcon}
              alt="delete"
              tooltip="Delete task"
              onClick={() => deleteTask(task.id)}
              className=""
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
