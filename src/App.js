import { useState, useRef } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  // Map of buttons, containing symbol/text contained in each
  const buttons = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "x"],
    [0, ".", "=", "/"],
    ["ANS", "CLEAR", "RESET"],
  ]

  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(0); 
  const inputRef = useRef(null);
 
  // Handle button presses on the calculator UI
  function handleClick(btn) {
    switch (btn) {
      case "ANS":
        setInput(input + result);
        break;

      case "CLEAR":
        setInput('');
        break;
  
      case "RESET":
        setResult(0); 
        setInput('');
        break;

      case "x":
      setInput(input + '*')
      break;

      case "=":
        setResult(() => eval(input))
        setInput('');
        break;

      default:
        setInput(input + btn);
        break;
    }
  }

  // Return components
  return ( 
    <div className="App"> 
      <div className='justify-content-center title'> 
        <h1 className="text-center">A Calculator</h1> 
      </div> 

      <div class="form-floating mb-1 ">
        <input 
          type='text'   
          id="specialInput" 
          ref={inputRef}
          className="text-start form-control border-blue" 
          value={input}
          onChange={(e) => setInput(e.target.value.replace(/[^0-9+\-*/.]/g, ''))}
          onBlur={() => inputRef.current.focus()}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "=") {handleClick("=")} 
          }}
        />

        <label for="floatingInput" className="text-blue fs-9"> {result} </label>
      </div>


      <div className="buttons">
        {buttons.map( (row, rowIndex) => { return (

          <div id={rowIndex} className="justify-content-left">
            {row.map( (btn) => { return (
              <button 
                onClick={() => handleClick(btn)} 
                className="btn"> 
              {btn} </button>
            )})}
          </div>

        )})}
      </div>

    </div> 
  ); 
} 
 
export default App; 
