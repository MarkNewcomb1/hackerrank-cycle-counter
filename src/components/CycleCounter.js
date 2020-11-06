import React from 'react';

const CycleCounter = ({cycle, incrementCount}) => {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={() => incrementCount(cycle)}
      >{cycle}</button>
    );
}

export default CycleCounter;
