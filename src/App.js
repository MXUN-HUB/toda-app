import './App.css';
import React, { useState} from 'react';

function App() {

  const [Todo_item, setTodo_item] = useState(['a','b','c'])
  const [Input_field, setInput_field] = useState('');

  const add_todo = (new_item)=>{

    new_item.preventDefault();
    setTodo_item([...Todo_item,Input_field]);
    setInput_field('');
    
  }

  return (
    <div className="App">
    <h1>Todo-app</h1>
    <form>
    <input value={Input_field} onChange={new_item => setInput_field(new_item.target.value)}/>
    <button type='submit' onClick={add_todo}>ADD</button>
    </form>
    <ul>
    {Todo_item.map(item=> (
      <li>{item}</li>
    ))}
    </ul>
      
    </div>
  );
}

export default App;
