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
      text: `
      <h2 class="font-bold text-2xl"> Hola - $COL-SPAN$</h2>
      <p>ljsdaljhdfajd</p>
      <div class="
      flex 
      min-w-[50px] 
      min-h-[50px]
      bg-black
      my-6
      ">&nbsp;</div>
      <div class="
      flex 
      min-w-[50px] 
      min-h-[50px]
      bg-black
      my-6
      items-end
      justify-end
      ">Wow!</div>
      `,
      colSpan: 1,
      rowSpan: 2,
      bg: 'sky-600',
      minH: '300px',
    },
    {
      id: 1,
      text: 'Yu',
      colSpan: 1,
      rowSpan: 1,
      bg: 'amber-900',
      minH: '0',
    },
    {
      id: 2,
      text: 'Till',
      colSpan: 1,
      rowSpan: 1,
      bg: 'violet-400',
      minH: '5rem',
    },
    {
      id: 3,
      text: 'Lindeman',
      colSpan: 1,
      rowSpan: 1,
      bg: 'amber-500',
      minH: 'auto',
    },
    {
      id: 4,
      text: 'Rammstein',
      colSpan: 1,
      rowSpan: 1,
      bg: 'sky-400',
      minH: '100px',
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
