import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


library.add(faPlus, faMinus);

const Counter = (props) =>{
    
    const [counter, setCounter] = useState([0])
    
    const handleClick = (click) => {
      if (click === "substract") {
          setCounter(counter - 1)
      }
      if (click === "add") {
          setCounter(counter + 1)
      }
      if (click === "reset") {
          setCounter(0)
      }
          }

    return (
        
        <div className="bgCounter">
            <div className="buttonAdd">
            {counter < 3 && <button onClick = {() => {const newCounter = [...counter]; newCounter.push(0); setCounter(newCounter); }} className="addCounter">{props.addCounters}</button>}
            </div>
            {counter > 0 && <button onClick = {() => handleClick ("substract")} className="moins"><FontAwesomeIcon icon="minus"/></button>}
            <span className="counter">{counter}{props.counter}</span>
            {counter < 10 && <button onClick = {() => handleClick ("add")}className="plus">{props.plus}<FontAwesomeIcon icon="plus"/></button>}
            <button onClick = {() => handleClick ("reset")}className="reset">{props.reset}</button>
        </div>
     )
}

export default Counter;