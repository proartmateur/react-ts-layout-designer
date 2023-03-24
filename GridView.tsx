import * as React from 'react';
import { Cell } from './Cell';
export interface GridViewProps {
  desktopCols: number;
}

const GridView = ({ desktopCols }: GridViewProps) => {
  const [dCols, setDCols] = React.useState(4);
  const [rowNums, setRowNums] = React.useState([
    {
      id: 0,
      text: 'Hola',
      colSpan: 1,
      rowSpan: 1,
      bg: 'sky-600',
    },
    {
      id: 1,
      text: 'Yu',
      colSpan: 1,
      rowSpan: 1,
      bg: 'amber-400',
    },
    {
      id: 2,
      text: 'Till',
      colSpan: 1,
      rowSpan: 1,
      bg: 'amber-400',
    },
    {
      id: 3,
      text: 'Lindeman',
      colSpan: 1,
      rowSpan: 1,
      bg: 'amber-500',
    },
    {
      id: 4,
      text: 'Rammstein',
      colSpan: 1,
      rowSpan: 1,
      bg: 'sky-400',
    },
  ]);

  const gridStyles = () => {
    return `grid w-full grid-cols-${String(dCols)}`;
  };

  React.useEffect(() => {
    console.log('desktopCols: ');
    console.log(desktopCols);
    if (desktopCols !== NaN) {
      setDCols(desktopCols);
    }
  }, [desktopCols]);

  return (
    <div>
      <p>
        {gridStyles()} - {desktopCols}
      </p>
      <div className={gridStyles()}>
        {rowNums.map((cel) => (
          <Cell cell={cel} gridCols={dCols} key={cel.id} />
        ))}
      </div>
    </div>
  );
};

export { GridView };
