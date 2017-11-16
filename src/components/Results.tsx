import './Results.css';
import * as React from 'react';
import { PropertyModel } from '../types/index';
import { Property } from './Property';

export const Results = (
  {
    properties
  }: {
    properties: PropertyModel[];
  }
) => {

  const renderProperties = () => {
    return properties.map(property => (
      <Property {...property} key={property.id} />
    ));
  };

  return (
    <div className="results">
      <h2 className="results__heading">Results</h2>
      {renderProperties()}
    </div>
  );
};
