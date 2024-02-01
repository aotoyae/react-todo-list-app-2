import { useState } from "react";
import uuid from "react-uuid";

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    if (!title) {
      alert(`제목을 입력해 주세요.`);
    } else if (!content) {
      alert(`내용을 입력해 주세요.`);
    } else {
      const newTodo = {
        id: uuid(),
        title,
        content,
        state: "todo",
      };

      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <article className="form-article">
      <form onSubmit={addTodo}>
        <h1>Title</h1>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력해 주세요."
          maxLength={7}
        />
        <p>{title.length}/7</p>
        <h1>Content</h1>
        <input
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="내용을 입력해 주세요."
          maxLength={44}
        />
        <p>{content.length}/44</p>
        <button type="submit">추가하기</button>
      </form>
    </article>
  );
}

export default Form;
