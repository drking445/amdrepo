import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function App() {

  const [words, setWords] = useState([]);
  const [origin, setOrigin] = useState("");


  return (
    <div className="App">
      <input id="words" value={origin} onChange={(e) => {setWords(e.target.value.split(",")); setOrigin(e.target.value.split(" ")); console.log(words);}} />
      <br/>
      <button onClick={() => {setWords([...words].sort()); console.log(words)}}>Arrange</button>
      <button onClick={() => {setWords([]); setOrigin("")}}>Reset</button>
      <br/>
      <br/>
      {words && words.map((word) => {
        return <button onClick={() => setWords(words.filter(item => item !== word))}>{word}</button>;
      })}
    </div>
  );
}

export default App;
