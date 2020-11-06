import React, {useState} from 'react';
import './App.css';

import CycleCounter from './components/CycleCounter';

const App = () => {
  const [cycle, setCycle] = useState(0);

  const incrementCount = (count) => {
    let newCount = count === 3 ? 0 : count + 1;
    setCycle(newCount);
  }
    return (
      <div className="App">
        <CycleCounter 
        cycle={cycle}
        incrementCount={incrementCount} 
        />
      </div>
    );
}

export default App;
