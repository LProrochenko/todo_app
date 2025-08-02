import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
function Todo({ todo, index }) {
  return (
    <div >
      <RiTodoFill />
      <div>{todo.text}</div>
      <RiDeleteBin2Line />
      <FaCheck />
    </div>
  );
}

export default Todo;
