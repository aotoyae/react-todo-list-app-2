function Header() {
  return (
    <header>
      <h1>My Todo List</h1>
      <h3>Today is {new Date().toLocaleDateString()}</h3>
    </header>
  );
}

export default Header;
