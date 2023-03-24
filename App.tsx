import * as React from 'react';
import { GridView } from './GridView';
import { GridConfig, GridConfigDto } from './GridConfig';
import './style.css';

export default function App() {
  const [desktopCols, setDesktopCols] = React.useState(4);
  const onGridConfigChange = (e: GridConfigDto) => {
    console.log('Updated');
    console.log(e);
    setDesktopCols(Number(e.desktopCols));
  };
  return (
    <div className="flex flex-col bg-amber-50 w-full">
      <GridConfig onChange={onGridConfigChange} />
      <GridView desktopCols={desktopCols} />
    </div>
  );
}
