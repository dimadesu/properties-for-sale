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
      <p className="property__id">ID: {property.id}</p>
      <p className="property__logo"><img src={property.agency.logo}/></p>
      <p className="property__photo"><img src={property.mainImage} width={400}/></p>
    </div>
  );
};
