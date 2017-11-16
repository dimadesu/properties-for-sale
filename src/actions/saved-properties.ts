import {
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
} from '../constants/saved-properties';
import { PropertyModel } from '../types/index';

export const addToSaved = (property: PropertyModel) => ({
  type: ADD_TO_SAVED,
  property,
});

export const removeFromSaved = (propertyId: string) => ({
  type: REMOVE_FROM_SAVED,
  propertyId,
});
