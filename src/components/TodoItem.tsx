import type { Todo } from "../types";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <li className={`p-2 border-b border-gray-200 ${todo.completed ? "line-through text-gray-500" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.name}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">Delete</button>
    </li>
  );
}

export default TodoItem;
