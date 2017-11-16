import './SavedProperties.css';
import * as React from 'react';

export const SavedProperties = (
  props: {
    properties: JSX.Element[];
  }
) => {
  const {
    properties
  } = props;

  return (
    <div className="saved_properties">
      <h2 className="saved_properties__heading">Saved Properties</h2>
      {properties}
    </div>
  );
};
