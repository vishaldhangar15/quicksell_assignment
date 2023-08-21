import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { useState } from 'react';

function App() {
  const [select, setSelect] = useState("")
  return (
    <div>
      <Navbar setSelect={setSelect} />
      <Body select={select}/>
    </div>
  
  );
}

export default App;
