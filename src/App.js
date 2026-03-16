import './App.css';
import {
  useState,
  useRef
} from "react"; 

function App() {
  
  const buttons = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "x"],
    [0, ".", "=", "/"],
    ["CLEAR", "RESET"],
  ]

  const inputRef = useRef(null); 
  const resultRef = useRef(null); 



  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0); 
  }; 
 
  function handleClick(btn) {
    switch (btn) {
      case "CLEAR":
        setInput('');
        break;
  
      case "RESET":
        setResult(0); 
        setInput('');
        break;

      case "+":
        setResult((result) => result + Number(input));
        setInput('');
        break;

      case "-":
        setResult((result) => result - Number(input)); 
        setInput('');
        break;

      case "/":
        setResult((result) => result / Number(input)); 
        setInput('');
        break;

      case "x":
        setResult((result) => result * Number(input)); 
        setInput('');
        break;

      case "=":
        setInput('');
        break;

      default:
        setInput(input + btn);
        break;
    }
  }

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simple Working Calculator</h1> 
      </div> 

      <div ref={resultRef}> {result} </div>

      <div> {input} </div>

      <div className="buttons">
        {buttons.map( (row, rowIndex) => { return (

          <div key={rowIndex} className="button-row">
            {row.map( (btn, btnIndex) => { return (
              <button key={btnIndex} onClick={() => handleClick(btn)}> {btn} </button>
            )})}
          </div>

        )})}
      </div>

    </div> 
  ); 
} 
 
export default App; 
