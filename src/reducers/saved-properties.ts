import {
  PropertyModel, AddToSavedAction, RemoveFromSavedAction,
} from '../types/index';
import { AnyAction } from 'redux';

export function savedProperties(
  state: PropertyModel[],
  action: AnyAction
): PropertyModel[] {
  switch (action.type) {
    case 'ADD_TO_SAVED':
      return state.concat((<AddToSavedAction> action).property);
    case 'REMOVE_FROM_SAVED': {
      const _state = state.slice(0); // copy array
      return _state.filter(property => property.id !== (<RemoveFromSavedAction> action).propertyId);
    }
    default:
      return state ? state : [];
  }
}
