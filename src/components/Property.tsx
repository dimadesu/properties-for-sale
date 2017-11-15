import './Property.css';
import * as React from 'react';
import { PropertyModel } from '../types/index';

export const Property = (
  property: PropertyModel
) => {
  return (
    <div
      className="property"
    >
      {property.id}
    </div>
  );
};
