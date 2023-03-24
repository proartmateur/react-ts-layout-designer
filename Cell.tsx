import * as React from 'react';
export interface CellProps {
  id: number;
  text: string;
  colSpan: number;
  rowSpan: number;
  bg: string;
}
const Cell = ({ cell, gridCols }: { cell: CellProps; gridCols: number }) => {
  const [colSpan, setColSpan] = React.useState(cell.colSpan);
  const [gCols, setGCols] = React.useState(gridCols);

  const handleColsPanAdd = () => {
    if (colSpan < gCols) {
      setColSpan(colSpan + 1);
    }
  };
  const handleColsPanSubs = () => {
    if (colSpan > 1) {
      setColSpan(colSpan - 1);
    }
  };
  const cellStyle = () => {
    return `
    flex 
    bg-${cell.bg} 
    text-white 
    w-full 
    col-span-${colSpan}
    row-span-${colSpan}
    justify-between
    `;
  };
  return (
    <div className={cellStyle()}>
      <button className="bg-black px-1" onClick={(e) => handleColsPanSubs()}>
        -
      </button>
      <p>
        {cell.text} {colSpan}
      </p>
      <button className="bg-black px-1" onClick={(e) => handleColsPanAdd()}>
        +
      </button>
    </div>
  );
};

export { Cell };
