import {
  ADD_TO_GRAYLISTED,
  REMOVE_FROM_GRAYLISTED,
} from '../constants/graylisted-properties';
import { PropertyModel } from '../types/index';

export const addToGraylisted = (property: PropertyModel) => ({
  type: ADD_TO_GRAYLISTED,
  property,
});

export const removeFromGraylisted = (propertyId: string) => ({
  type: REMOVE_FROM_GRAYLISTED,
  propertyId,
});
