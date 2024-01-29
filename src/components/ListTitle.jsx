function ListTitle({ todoState, stateType }) {
  return (
    <h1
      className={
        todoState === stateType.todo
          ? "todo-title"
          : todoState === stateType.ongoing
            ? "ongoing-title"
            : "done-title"
      }
    >
      {todoState === stateType.todo
        ? "Todo"
        : todoState === stateType.ongoing
          ? "Ongoing"
          : "Done"}
    </h1>
  );
}

export default ListTitle;
