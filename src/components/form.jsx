import React, { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const handelChangeInput = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim() !== "") {
      setTodos([...todos, todo]);
    }
    setTodo({ name: "", done: false });
  };
  return (
    <>
      <form
        className={style.todo_form}
        onSubmit={(e) => {
          handelSubmit(e);
        }}
      >
        <input
          className={style.modern_input}
          type="text"
          placeholder="Enter New Todo...."
          onChange={(e) => {
            handelChangeInput(e);
          }}
          value={todo.name}
          name="todo"
        />
        <button className={style.modern_button} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
