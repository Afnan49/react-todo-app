import { useState } from "react";
import TodoItems from "./todoItems";
import Form from "./form";
import styel from "./todo.module.css";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />

      {todos.length > 0 ? (
        <div className={styel.list}>
          {sortedTodos.map((item) => (
            <TodoItems
              key={item.name}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      ) : (
        <div className={styel.list}>Add New Todo To Manage Your Time</div>
      )}

      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}
