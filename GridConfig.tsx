import * as React from 'react';

export interface GridConfigDto {
  desktopCols: number;
}

export interface GridConfigProps {
  onChange: (e: GridConfigDto) => void;
}

const GridConfig = ({ onChange }: GridConfigProps) => {
  const [cols, setCols] = React.useState(4);

  const handleColsChange = (e) => {
    const newVal = e.target.value;
    console.log(newVal);
    setCols(newVal);
  };

  React.useEffect(() => {
    onChange({
      desktopCols: Number(cols),
    });
  }, [cols]);

  return (
    <div className="flex w-full">
      <p className="font-bold mr-1">Desktop</p>
      <label for="desktop-cols" className="mr-1">
        Cols
      </label>
      <input
        className="bg-gray-200 px-2"
        type="number"
        id="desktop-cols"
        name="desktop-cols"
        value={cols}
        min={0}
        max={15}
        onChange={handleColsChange}
      />
    </div>
  );
};

export { GridConfig };
