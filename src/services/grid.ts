import { SIZE, ALIVE, DEAD, VARIANTS_OF_NEIGHBORS } from 'config/app.config';

export type Grid = number[][];

export const createGrid = (size: number = SIZE): Grid => {
  return Array.from(
    Array(size),
    () => Array.from(
      Array(size),
      () => Math.round(Math.random()),
    ),
  );
}

export const getNeighbors = (x: number, y: number, size: number = SIZE): Grid => {
  return VARIANTS_OF_NEIGHBORS
    .map(([neighborX, neighborY]) => ([x + neighborX, y + neighborY]))
    .filter((neighbor: number[]) => isInFrame(neighbor, size));
}

export const isInFrame = ([neighborX, neighborY]: number[], size: number = SIZE): boolean => {
  return neighborX >= 0 && neighborX < size && neighborY >= 0 && neighborY < size;
}

export const aliveNeighbors = (grid: Grid, x: number, y: number, size: number = SIZE): number => {
  return getNeighbors(x, y, size)
    .reduce((count, [neighborX, neighborY]) => {
      if (grid[neighborX][neighborY] === ALIVE) {
        return count += 1;
      }

      return count;
    }, 0);
}

export const nextTick = (grid: Grid, size: number = SIZE): Grid => {
  return grid.map((row, x) => {
    return row.map((col, y) => {
      const alive = aliveNeighbors(grid, x, y, size);

      return (alive === 3 || (alive === 2 && col === ALIVE)) ? ALIVE : DEAD;
    });
  });
}
