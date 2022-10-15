import React, { createContext } from "react";
import { useState } from "react";
import { Counter } from "./components/Counter";

const counterContext = createContext();
const [count, setCount] = useState(0);

const CounterStateContext = (props) => {
  return (
    <div id="counter-context">
      <counterContext.Provider value={{ count, setCount }}>
        {props.children}
      </counterContext.Provider>
    </div>
  );
};

export { counterContext, CounterStateContext };
