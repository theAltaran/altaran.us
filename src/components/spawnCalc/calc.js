import React, { useState } from 'react';

const SpawnCalculator = () => {
  // State hooks
  const [spawnBagWeight, setSpawnBagWeight] = useState(0);
  const [vermWeight, setVermWeight] = useState(0);
  const [grainWeight, setGrainWeight] = useState(0);
  const [spawnRatio, setSpawnRatio] = useState(1);

  // Calculations
  const calculateTotal = () => {
    return spawnBagWeight + vermWeight + grainWeight * spawnRatio;
  };

  return (
    <div>
      <h1>Spawn Calculator</h1>
      <div>
        <label>
          Spawn Bag Weight (g):
          <input
            type="number"
            value={spawnBagWeight}
            onChange={(e) => setSpawnBagWeight(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Vermiculite Weight (g):
          <input
            type="number"
            value={vermWeight}
            onChange={(e) => setVermWeight(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Grain Weight (g):
          <input
            type="number"
            value={grainWeight}
            onChange={(e) => setGrainWeight(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Spawn Ratio:
          <input
            type="number"
            value={spawnRatio}
            onChange={(e) => setSpawnRatio(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <h2>Total: {calculateTotal()} g</h2>
      </div>
    </div>
  );
};

export default SpawnCalculator;
