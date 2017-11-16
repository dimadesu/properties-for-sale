import './Property.css';
import * as React from 'react';
import { PropertyModel } from '../types/index';

export const Property = (
  props: {
    property: PropertyModel;
    isAddButton: boolean;
    addToSaved?: Function;
    removeFromSaved?: Function;
  }
) => {
  const {
    property,
    isAddButton,
    addToSaved,
    removeFromSaved,
  } = props;

  function renderButton () {
    if (isAddButton) {
      return (
        <button
          type="button"
          className="property__add-button"
          onClick={() => {
            if (addToSaved) {
              addToSaved(property);
            }
          }}
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="property__remove-button"
          onClick={() => {
            if (removeFromSaved) {
              removeFromSaved(property.id);
            }
          }}
        >
          Remove
        </button>
      );
    }
  }

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
      <div className="property__buttons">
        {renderButton()}
      </div>
    </div>
  );
};
