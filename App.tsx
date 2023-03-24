import * as React from 'react';
import { GridView } from './GridView';
import { GridConfig } from './GridConfig';
import './style.css';

export default function App() {
  return (
    <div className="flex bg-amber-50 w-full">
      <GridConfig />
      <GridView />
    </div>
  );
}
