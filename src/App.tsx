import { useState } from 'react'
import type { Todo } from './types';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

function App() {
  const [todos,settodos]=useState<Todo[]>([]);
  const addtodo=(text:string) : void =>{
  const newtodo: Todo = {    id:Date.now(),
    name:text,
    completed:false
  }
  settodos([...todos,newtodo])
  }

  const toggletodo=(id:number):void=>{
    const updatedtodos=todos.map(todo=>{
      if(todo.id===id){
        return {...todo,completed:!todo.completed}
      }
      return todo;
    })
    settodos(updatedtodos);
  }

  const deletetodo=(id:number):void=>{
    const updatedtodos=todos.filter(todo=>todo.id!==id);
    settodos(updatedtodos);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-emerald-400">
      <div className="bg-white w-[420px] p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
      <TodoForm addTodo={addtodo} />
      <TodoList todos={todos}  
      toggleTodo={toggletodo} 
      deleteTodo={deletetodo}/>

    </div>
    </div>
  )
}


export default App;
