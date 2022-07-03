import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };

  return (
   <form onSubmit={submit}>
    <input
      value = {title}
      type = "text"
      onChange = {event => setTitle(event.target.value)}
      placeholder = 'color title...'
    />
    <input 
      value = {color}
      type = "color"
      onChange = {event => setColor(event.target.value)}
    />
    <button>Add</button>
   </form>
  );
}

export default App;

