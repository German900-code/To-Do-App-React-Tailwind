// import DeleteIcon from "../assets/delete-icon.svg";
// import Button from "./Button";

// function List({ tasks, deleteTask, setTasks }) {
//   function handleCheckboxInput(event) {
//     setIsChecked(event.target.checked);
//   }

//   function toggleTask(id) {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, isChecked: !task.isChecked } : task,
//       ),
//     );
//   }

//   return (
//     <ul className="mt-15 m-15 flex flex-row flex-wrap gap-5 sm:justify-center">
//       {tasks.map((task, id) => (
//         <div className="bg-orange-100 rounded-xl w-auto text-orange-900 flex flex-col">
//           <li
//             key={task.id}
//             className={`text-2xl uppercase p-5 cursor-pointer transition-all duration-400 text-neutral-700 font-bold ${task.isChecked ? "line-through text-gray-200" : "text-black"}`}
//             value={isChecked}
//             onChange={handleCheckboxInput}
//           >
//             {index + 1}.
//             <span
//               onClick={() => toggleTask(task.id)}
//               className="cursor-pointer"
//             >
//               {task.text}
//             </span>
//             <input
//               type="checkbox"
//               className="cursor-pointer bg-none w-8 h-8 text-black"
//               value={isChecked}
//               onChange={handleCheckboxInput}
//             />
//           </li>
//           <div className="flex flex-row items-center justify-center gap-7">
//             <Button
//               icon={DeleteIcon}
//               alt="delete"
//               tooltip="Delete task"
//               onClick={() => deleteTask(index)}
//               className="flex justify-center w-auto pb-5"
//             />
//             {/* <input
//               type="checkbox"
//               className="cursor-pointer bg-none w-8 h-8 text-black"
//               value={isChecked}
//               onChange={handleCheckboxInput}
//             /> */}
//             {/* <span>Done</span> */}
//           </div>
//         </div>
//       ))}
//     </ul>
//   );
// }

// export default List;

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
            p-5
            flex flex-col gap-4
          "
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
              // className="m-auto"
              className=""
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
