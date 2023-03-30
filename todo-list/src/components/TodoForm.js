import React from 'react'
import { useState, useRef, useEffect } from 'react';
import '../styles/todoForm.css'


const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  useEffect(() =>{
    inputRef.current.focus();
  });

  const handleSubmit  = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() *10000),
      text: input
    });


    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input
      type='text'
      placeholder='Update a todo'
      value={input}
      name='text'
      className='todo-input editInput'
      onChange={handleChange}
      ref={inputRef}></input>
      <button className='todo-button editBtn'>Update todo</button>
        </>
      ) :
      (
        <>
         <input
      type='text'
      placeholder='Add a todo'
      value={input}
      name='text'
      className='todo-input'
      onChange={handleChange}
      ref={inputRef}></input>
      <button className='todo-button'>Add todo</button>
        </>
      )}
      
    </form>
  )
}

export default TodoForm