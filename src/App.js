import React, { useState } from 'react';
import './App.css';

function App() {

  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(option1, option2, option3);
    setOption1('');
    setOption2('');
    setOption3('');
  }

  const choices = ['A', 'B', 'C', 'D', 'E'];

  const choicesFilter = (choice) => {
    return choice !== option1 && choice !== option2 && choice !== option3;
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select 
          name="option1"
          onChange={(e) => setOption1(e.target.value)}
          value={option1}  
        >
          {(option1 === "") && (<option>Select a value</option>)}
          {(option1 !== "") && (
            <option
            value={option1}
            >
              {option1}
            </option>)}
            {choices.filter(choicesFilter).map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
        </select>
        <select 
          name="option2"
          onChange={(e) => setOption2(e.target.value)}
          value={option2}  
        >
          {(option2 === "") && (<option>Select a value</option>)}
          {(option2 !== "") && (
            <option
            value={option2}
            >
              {option2}
            </option>)}
            {choices.filter(choicesFilter).map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
        </select>
        <select 
          name="option3"
          onChange={(e) => setOption3(e.target.value)}
          value={option3}  
        >
          {(option3 === "") && (<option>Select a value</option>)}
          {(option3 !== "") && (
            <option
            value={option3}
            >
              {option3}
            </option>)}
            {choices.filter(choicesFilter).map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
        </select>
        <button 
          disabled={(option1 === "" || option2 === "" || option3 === "") ? true : false}
          className={(option1 === "" || option2 === "" || option3 === "") ? 'disabled' : ''}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
