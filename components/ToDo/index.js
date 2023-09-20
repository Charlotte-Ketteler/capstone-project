import { useState } from "react";
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
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo() {
    if (task !== "") {
      const newTodo = {
        id: Math.random().toString(36).substring(2),
        text: task,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
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
          {todos.map((todo) => (
            <ToDoBackground key={todo.id}>
              {todo.text}
              <DeleteButtonToDo onClick={() => deleteTodo(todo.id)}>
                x
              </DeleteButtonToDo>
            </ToDoBackground>
          ))}
        </ul>
      </ToDoBody>
    </>
  );
}
