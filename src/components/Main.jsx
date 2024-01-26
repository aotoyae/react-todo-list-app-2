import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import uuid from "react-uuid";

function Main() {
  const [todos, setTodos] = useState([
    { id: uuid(), title: "test1", content: "test", state: "todo" },
    { id: uuid(), title: "test2", content: "test", state: "todo" },
    { id: uuid(), title: "test3", content: "test", state: "todo" },
    { id: uuid(), title: "test4", content: "test", state: "todo" },
  ]);

  const stateType = { todo: "todo", ongoing: "ongoing", done: "done" };

  return (
    <main>
      <Form todos={todos} setTodos={setTodos} />
      <article>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          stateType={stateType}
          todoState={stateType.todo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          stateType={stateType}
          todoState={stateType.ongoing}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          stateType={stateType}
          todoState={stateType.done}
        />
      </article>
    </main>
  );
}

export default Main;
