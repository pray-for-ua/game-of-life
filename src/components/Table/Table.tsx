import React from 'react';
import Row from 'components/Row';
import { Grid } from 'services/grid';

export interface TableProps {
  grid: Grid,
}

const Table: React.FC<TableProps> = ({ grid }) => {
  return (
    <div>
      {grid.map((row: number[], index: number) => <Row row={row} key={index} rowNumber={index} />)}
    </div>
  );
}

export default Table;