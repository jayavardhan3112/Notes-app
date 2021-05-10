import './App.css';
import React, { useState, useEffect } from 'react';
import Buttons from './Components/button';
import Forms from './Components/form';
import Todos from './Components/todoList';
import firebase from "firebase";
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, task: doc.data().task})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault()

    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>NOTES 🚀</h1>
        <form>
          <Forms {...{input, setInput}} />
          <Buttons addTodoFunc={addTodo} btnText="Todo App" input={input} />
        </form>
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
