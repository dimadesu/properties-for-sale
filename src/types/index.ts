import { Action } from 'redux';
import { Dispatch } from 'redux';

export interface PropertyModel {
  price: string;
  agency: {
    brandingColors: {
      primary: string;
    },
    logo: string;
  };
  id: string;
  mainImage: string;
}

export interface StoreState {
  properties: PropertyModel[];
  savedProperties: PropertyModel[];
}

export interface LoadingPropertiesSucceeded extends Action {
  properties: PropertyModel[];
}

// Saved properties list

export interface AddToSavedAction extends Action {
  type: 'ADD_TO_SAVED';
  property: PropertyModel;
}

export interface RemoveFromSavedAction extends Action {
  type: 'REMOVE_FROM_SAVED';
  propertyId: string;
}

export interface ContainerProps extends StoreState {
  dispatch: Dispatch<{}>;
}
