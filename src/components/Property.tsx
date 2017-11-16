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
      <div className="property__photo"><img src={property.mainImage}/></div>
      <div className="property__row">
        <div className="property__id">ID: {property.id}</div>
        <div className="property__price">Price: {property.price}</div>
        <div className="property__logo"><img src={property.agency.logo}/></div>
      </div>
    </div>
  );
};
