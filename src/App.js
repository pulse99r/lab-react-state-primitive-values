import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0);
  const [payment, setPayment] = useState(1);
  
  function appReset(){
    setScore(score - score )
  }
  function increaseScore(){
    setScore(score + 1)
    console.log("increasing score")
  }
  function payAmount(){
    if(score >= 10){
      //alert("Score is greater than 10!!")
      // setPayment(payment + 10)
      setScore(score + 10)
    } else {
      alert("You can't afford that!")
    }
  }
    return (
      <main>
        <h1>Current Score: {score}</h1>
        {score < 100 ? (
          <>
            <button onClick={ increaseScore } > +1 </button>
            <button onClick={ payAmount}>Pay 10 points to change from {score} to {score + 2}</button>
          </>
          
        ) : (
          <>
            <button onClick={appReset}>Play Again</button>
            alert("You Win!!!")
          </>
        )}
      </main>
    );
}

export default App;
