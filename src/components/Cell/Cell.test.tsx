import React from 'react';
import { render } from '@testing-library/react';
import Cell, { CellProps } from './Cell';

const defaultProps: CellProps = {
  cell: 0,
}

const setup = (props: CellProps = defaultProps) => {
  const utils = render(
    <Cell {...props} />
  );

  const rerender = (newProps: CellProps = defaultProps) => {
    utils.rerender(
      <Cell {...newProps} />
    );
  };

  return {
    ...utils,
    rerender,
  };
};

describe('Cell component tests', () => {

  test('Cell black test', () => {
    const { container } = setup({
      cell: 0,
    });

    expect(container.firstChild).not.toHaveClass('cell-alive')
  });

  test('Cell white test', () => {
    const { container } = setup({
      cell: 1,
    });

    expect(container.firstChild).toHaveClass('cell-alive')
  });
})