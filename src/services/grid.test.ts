import { isInFrame, createGrid, aliveNeighbors, nextTick } from './grid'

const initTable = [
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
]

const resultTable = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
]

describe('Grid service tests', () => {

  test('Cell in Frame', () => {
    const testCell = [2, 30]
    expect(isInFrame(testCell)).toBeTruthy()
  });

  test('Cell not in Frame', () => {
    const testCell = [2, 51]
    expect(isInFrame(testCell)).toBeFalsy()
  });

  test('create grid length', () => {
    const testSize = 50
    expect(createGrid(testSize).length).toBe(testSize)
    expect(createGrid(testSize)[0].length).toBe(testSize)
  });

  test('aliveNeighbors test', () => {
    expect(aliveNeighbors(initTable, 2, 1)).toBe(3)
    expect(aliveNeighbors(initTable, 2, 2)).toBe(2)
    expect(aliveNeighbors(initTable, 0, 0)).toBe(0)
  });

  test('next tick test', () => {
    expect(nextTick(initTable, 5)).toMatchObject(resultTable)
    expect(nextTick(resultTable, 5)).toMatchObject(initTable)
  });
})
