import useLocalStorageState from "use-local-storage-state";
import {
  InputField,
  ToDoBody,
  AddButton,
  DeleteButtonToDo,
  ToDoBackground,
  ToDoP,
  InputPosition,
} from "./index.styled";

export default function ToDo() {
  const [todos, setTodos] = useLocalStorageState("todos", { defaultValue: [] });
  const [task, setTask] = useLocalStorageState("task", { defaultValue: "" });

  function addTodo() {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <ToDoBody>
        <ToDoP>ToDo</ToDoP>
        <InputPosition>
          <InputField
            type="text"
            placeholder="Feivels Sattel putzen"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <AddButton onClick={addTodo}>+</AddButton>
        </InputPosition>

        <ul>
          {todos.map((todo, index) => (
            <ToDoBackground key={index}>
              {todo}
              <DeleteButtonToDo onClick={() => deleteTodo(index)}>
                x
              </DeleteButtonToDo>
            </ToDoBackground>
          ))}
        </ul>
      </ToDoBody>
    </>
  );
}
