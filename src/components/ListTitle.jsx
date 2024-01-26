function ListTitle({ todoState, stateType }) {
  return (
    <h1>
      {todoState === stateType.todo
        ? "Todo"
        : todoState === stateType.ongoing
          ? "Ongoing"
          : "Done"}
    </h1>
  );
}

export default ListTitle;
