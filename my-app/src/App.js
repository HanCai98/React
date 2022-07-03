import './App.css';
import { useRef } from 'react';

function App() {
  const textTitle = useRef();
  const hexColor = useRef();
  console.log(textTitle);

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
   <form onSubmit={submit}>
    <input
      ref={textTitle}
      type="text" 
      placeholder='color title...'
    />
    <input ref={hexColor} type="color"/>
    <button>Add</button>
   </form>
  );
}

export default App;

