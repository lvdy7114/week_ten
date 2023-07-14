import React from "react";
import './App.css';
import { useReducer } from 'react';

const ACTION = {
  INCREMENT: "increment", 
  DECREMENT: "decrement", 
  NEW_USER_INPUT: "newUserInput", 
  TOGGLE_COLOR: "tgColor"
}

const reducer = (state, action) => { 
 
  switch(action.type) {
    case ACTION.INCREMENT:
      return {...state,count:state.count + 1}
    case ACTION.DECREMENT:
      return {...state,count:state.count - 1}
    case ACTION.NEW_USER_INPUT:
      return {...state,userInput: action.payload}
    case ACTION.TOGGLE_COLOR:
      return {...state,color: !state.color}
    default: 
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "", 
    color: false
  });

  return ( 
  <main className="App" style={{ color: state.color ? "red" : "black"}}>
  <input
    type="text"
    value={state.userInput}  //below is different than instructor code
    onChange={(e) => {console.log(e.target.value); dispatch({type: ACTION.NEW_USER_INPUT, payload: e.target.value})}}
    /> 
    <br />
    <br />
    <p>state {state.count}</p>
    <p>state message {state.userInput}</p>
    <section>
      <button onClick={() => dispatch({type: ACTION.DECREMENT})}>-</button>
      <button onClick={() => dispatch({type: ACTION.INCREMENT})}>+</button>
      <button onClick={() => dispatch({type: ACTION.TOGGLE_COLOR})}>
      Toggle color
      </button>
    </section>
  </main>
  );
}

export default App
