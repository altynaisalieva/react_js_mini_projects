import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)){
      return ;
    }
 
  const newTodo = [todo, ...todos];
  setTodos(newTodo);
  //console.log(newTodo);
  
};
 const updateTodo = (todoId, newValue) => {
  if (!newValue.text || /^\s*$/.test(newValue.text)){
    return ;
  }

  setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
 }

const completeTodo = (id) =>{
  let updatedTodo = todos.map((todo) =>{
    if(todo.id === id){
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
  setTodos(updatedTodo);
}

const removeTodo = (id) =>{
  const remove = [...todos].filter((todo)=> todo.id !== id);

  setTodos(remove);
}


  return (
    
      <>
      <h1>What is the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </>
      
  )
}

export default TodoList