import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
library.add(faPlus, faMinus);

const Counter = (props) => {
  const [counters, setCounters] = useState([0])

   return (
        <div className="bgCounter">
          <div className="boxAddCounter">
                  {counters.length < 3 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter.push(0); setCounters(newCounter);}} 
                  className="buttonAddCounter">{props.addCounters}</button>}
          </div>
        {counters.map((counter, index) => { 
        return (
          <div className="boxCounter">
              <div className="boxLess">
                {counter > 0 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter[index] --; setCounters(newCounter);}}
                  className="less"><FontAwesomeIcon icon="minus"/></button>}
              </div>

              <span className="counter">{counter}</span>

              <div className="boxMore">
                {counter < 10 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter[index] ++; setCounters(newCounter);}}
                  className="more"><FontAwesomeIcon icon="plus"/>{props.plus}</button>}
              </div>

              <button onClick = {() => {
                  const newCounter = [...counters];
                  newCounter[index] = 0; setCounters(newCounter);}} className="reset">{props.reset}</button>
          </div>
        );
     })}
          <div className="boxAddCounter">
                  {counters.length >= 2 && <button onClick = {() => {
                  const newCounter = [...counters]; newCounter.shift(0); setCounters(newCounter);}} 
                  className="buttonAddCounter">{props.suppCounter}</button>}
          </div>
        </div>
    );
}
export default Counter; 


