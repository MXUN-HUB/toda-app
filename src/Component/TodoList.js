import React from 'react';
import db from  '../firebase'




function TodoList(props) {
    
    return (
       <li>       
       {props.text.todo}
       <button onClick={event=>{
            db.collection('TaskDB').doc(props.text.id).delete()
        }}>
        Delete
        </button>  
       </li>
              
        
    )}

export default TodoList
