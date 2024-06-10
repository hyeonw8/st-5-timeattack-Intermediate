import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todos);

  return (
    <section>
      <h2>{isDone === false ? 'Working...' : 'Done!'}</h2>
      <ul>
        { todos.filter(todo => todo.isDone === false)
        .map((todo, index) => <TodoItem key={index} todo={todo} /> )}
      </ul>
    </section>
  );
}
