import { createContext, useState } from 'react';
import './App.css';
import Parent from './components/RawState/Parent';

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {count, setCount}
  return (
    <CounterContext.Provider value={value}>
      <div className="App">
        <h1>Hello Raw State</h1>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
