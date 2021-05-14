import './App.css';
import React, { useEffect, useState} from 'react';
import db from  './firebase';
import firebase from 'firebase';
import TodoList from  './Component/TodoList';


function App() {

  const [Todo_item, setTodo_item] = useState([])
  const [Input_field, setInput_field] = useState('');

  useEffect(()=>{
    db.collection('TaskDB').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodo_item(snapshot.docs.map(doc => ({id: doc.id , todo:doc.data().Task})))
    })
  },[]);
   
  const add_todo = (new_item)=>{

    new_item.preventDefault();

    db.collection('TaskDB').add({
      Task: Input_field,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput_field('');
    
  }; 

  return (
    <div className="App">
    <h1>Todo-app</h1>
    <form>
    <input value={Input_field} onChange={new_item => setInput_field(new_item.target.value)}/>
    <button disabled={!Input_field} type='submit' onClick={add_todo}>ADD</button>
    </form>
    <ul>
    {Todo_item.map(item => (
      <TodoList text ={item}/>
    ))}
    </ul>
      
    </div>
  );
}

export default App;
