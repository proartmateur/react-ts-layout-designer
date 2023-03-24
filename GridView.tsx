import * as React from 'react';

export interface GridViewProps {
  desktopCols: number;
}

const GridView = ({ desktopCols }: GridViewProps) => {
  const [dCols, setDCols] = React.useState(desktopCols);
  const gridStyles = () => {
    const base = 'grid w-full';
    return `${base} grid-cols-${dCols}`;
  };

  return (
    <div className={gridStyles()}>
      <div className="flex bg-amber-500 text-white w-full">Hola</div>
      <div className="flex bg-black text-white w-full">Hola</div>
      <div className="flex bg-black text-white w-full">Hola</div>
      <div className="flex bg-black text-white w-full">Hola</div>
    </div>
  );
};

export { GridView };
