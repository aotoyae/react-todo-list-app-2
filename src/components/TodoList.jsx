import ListTitle from "./ListTitle";

function TodoList({ todos, setTodos, todoState, stateType }) {
  const changeState = (id, statetype) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, state: statetype } : todo;
    });

    setTodos(newTodos);
    console.log(id);
    console.log(todoState);
  };

  const deletTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <>
      <ListTitle todoState={todoState} stateType={stateType} />
      <section>
        <ul>
          {todos
            .filter((todo) => todo.state === todoState)
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <h2>{todo.title}</h2>
                  <p>{todo.content}</p>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={todo.state === stateType.todo}
                      onChange={() => changeState(todo.id, stateType.todo)}
                    />
                    <p>할 일</p>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={todo.state === stateType.ongoing}
                      onChange={() => changeState(todo.id, stateType.ongoing)}
                    />
                    <p>진행 중</p>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={todo.state === stateType.done}
                      onChange={() => changeState(todo.id, stateType.done)}
                    />
                    <p>완료</p>
                  </div>
                  <button onClick={() => deletTodo(todo.id)}>삭제</button>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
