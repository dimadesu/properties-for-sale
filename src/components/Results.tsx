import './Results.css';
import * as React from 'react';

export const Results = (
  {
    properties
  }: {
    properties: JSX.Element[];
  }
) => {
  return (
    <div className="results">
      <h2 className="results__heading">Results</h2>
      {properties}
    </div>
  );
};
