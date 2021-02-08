import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
library.add(faPlus, faMinus);

const Counter = (props) => {
  const [counters, setCounters] = useState([0])

   return (
       
        <div className="bgCounter">
          <div className="boxAdd">
                  <button onClick = {() => {
                  const newCounter = [...counters]; newCounter.push(0); setCounters(newCounter);}} 
                  className="addCounter">{props.addCounters}</button>
          </div>

      {counters.map((counter, index) => { 
        return (
          <div className="buttonAdd">
              {counter > 0 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter[index] --; setCounters(newCounter);}}
                  className="moins"><FontAwesomeIcon icon="minus"/></button>}

              <span className="counter">{counter}</span>

              {counter < 10 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter[index] ++; setCounters(newCounter);}}
                  className="plus"><FontAwesomeIcon icon="plus"/>{props.plus}</button>}

              <button onClick = {counter} className="reset">{props.reset}</button>
          </div>
        );
     })}
               

        </div>
    );
    
}

export default Counter; 