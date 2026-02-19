import React, { useState } from 'react';

const PedometerApp = () => {
  const [steps, setSteps] = useState(0);

  const handleIncrement = () => {
    setSteps(steps + 1);
  };

  const handleDecrement = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };

  return (
    <div>
      <h1>Pedometer</h1>
      <p>Steps: {steps}</p>
      <button onClick={handleIncrement}>Add Step</button>
      <button onClick={handleDecrement}>Remove Step</button>
    </div>
  );
};

export default PedometerApp;