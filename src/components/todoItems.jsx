import style from "./todo.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  const handelDeletItem = (item) => {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  };
  const handelCompleteTask = (item) => {
    const newTodos = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    // console.log(todos);
  };
  const completede = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={completede} onClick={() => handelCompleteTask(item)}>
          {item.name}
        </span>
        <span>
          <button
            className={style.deletButton}
            onClick={() => handelDeletItem(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
}
