import './SavedProperties.css';
import * as React from 'react';
import { PropertyModel } from '../types/index';
import { Property } from './Property';

export const SavedProperties = (
  props: {
    properties: PropertyModel[];
  }
) => {
  const {
    properties
  } = props;

  const renderProperties = () => {
    return properties.map(property => (
      <Property
        property={property}
        isAddButton={false}
        key={property.id}
      />
    ));
  };

  return (
    <div className="saved_properties">
      <h2 className="saved_properties__heading">Saved Properties</h2>
      {renderProperties()}
    </div>
  );
};
