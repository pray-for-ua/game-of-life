import React, { useState } from 'react';
import Table from 'components/Table';
import useInterval from 'hooks/useInterval';
import { createGrid, nextTick } from 'services/grid';
import { DELAY } from 'config/app.config';

const App: React.FC = () => {
  const [grid, setGrid] = useState(createGrid());

  useInterval(() => setGrid(nextTick(grid)), DELAY);

  return (
    <Table grid={grid} />
  );
}

export default App;
