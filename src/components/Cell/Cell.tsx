import './cell.css';

import React from 'react';
import { ALIVE } from 'config/app.config';

export interface CellProps {
  cell: number
}

const Cell: React.FC<CellProps> = ({ cell }) => {
  const isAlive = cell === ALIVE;

  return (
    <div data-testid="cell" className={`cell ${isAlive && 'cell-alive'}`} />
  );
}

export default React.memo(Cell);
