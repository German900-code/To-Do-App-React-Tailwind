import DeleteIcon from "../assets/delete-icon.svg";
import Button from "./Button";

function List({ tasks, deleteTask }) {
  return (
    <ul className="mt-15 m-15 flex flex-row flex-wrap gap-5 sm:justify-center">
      {tasks.map((task, index) => (
        <div className="bg-orange-100 rounded-xl w-auto text-orange-900">
          <li
            key={index}
            className="text-2xl uppercase p-5 text-neutral-700 font-bold  "
          >
            {index + 1}. {task}
          </li>
          <Button
            icon={DeleteIcon}
            alt="delete"
            tooltip="Delete task"
            onClick={() => deleteTask(index)}
            className="flex justify-center w-full pb-5"
          />
        </div>
      ))}
    </ul>
  );
}

export default List;
