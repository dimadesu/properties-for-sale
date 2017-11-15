import { Action } from 'redux';

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
}

export interface CustomAction extends Action {
  properties: PropertyModel[];
}
