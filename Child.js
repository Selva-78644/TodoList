
import React, { useState } from 'react';

function Child() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditSave = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setEditIndex(-1);
    setEditedTodo('');
  };

  const editItem = (index) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  return (
    // <div className="App">
    <div class="container"style={{borderRadius:"25px",padding:"100px",height:"50vh",marginTop:"80px",marginLeft:"300px",width:"700px",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{ color: 'black',borderRadius:"9999px", fontSize: 66 ,backgroundColor: 'violet',marginLeft:"28px",paddingRight:"50px",height: '80px', width: '500px',textAlign:'center',marginBottom:"50px" }}>Todo List</h2>
      <input
        style={{
          justifyContent:'center',
          textAlign:'center',
          width: '500px',
          height: '30px',
          borderRadius:"50px",
          fontSize: '28px',
          
        }
        }
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}></input>
      
      <button onClick={addTodo} style={{width: '150px',height: '150px', marginLeft:"20px",borderRadius:"50px",height: '30px',marginTop:"50px", backgroundColor: 'green', justifyContent: 'center'}}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                  style={{borderRadius:"50px"}}
                />
                <button onClick={() => handleEditSave(index)}style={{background:"aqua",width:"100px",height:'100',marginLeft:"10px",borderRadius:"50px"}}>Save</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleDelete(index)}style={{background:"red",width:"100px",marginLeft:"20px",borderRadius:"50px"}}>Delete</button>
                
                <button onClick={() => editItem(index)}style={{background:"green",width:"100px",marginLeft:"10px",borderRadius:"50px"}}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    // </div>
  );
}

export default Child;

