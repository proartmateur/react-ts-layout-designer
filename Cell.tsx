import * as React from 'react';
export interface CellProps {
  id: number;
  text: string;
  colSpan: number;
  rowSpan: number;
  bg: string;
  minH: string;
}
const Cell = ({ cell, gridCols }: { cell: CellProps; gridCols: number }) => {
  const [colSpan, setColSpan] = React.useState(cell.colSpan);
  const [rowSpan, setRowSpan] = React.useState(cell.rowSpan);
  const [minH, setMinH] = React.useState(cell.minH);
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
    let minHeight = '';
    switch (minH) {
      case '0':
      case 'full':
      case 'screen':
      case 'min':
      case 'max':
      case 'fitt':
        minHeight = `min-h-${minH}`;
        break;
      case 'auto':
      case undefined:
        minHeight = '';
        break;
      default:
        minHeight = `min-h-[${minH}]`;
        break;
    }

    return `
    flex 
    bg-${cell.bg} 
    text-white 
    w-full 
    col-span-${colSpan}
    row-span-${rowSpan}
    justify-between
    ${minHeight}
    `;
  };
  return (
    <div className={cellStyle()}>
      <button className="bg-black px-1" onClick={(e) => handleColsPanSubs()}>
        -
      </button>
      <p dangerouslySetInnerHTML={{ __html: cell.text.replace(colSpan) }}></p>
      <button className="bg-black px-1" onClick={(e) => handleColsPanAdd()}>
        +
      </button>
    </div>
  );
};

export { Cell };
