import {
  PropertyModel, AddToSavedAction, RemoveFromSavedAction,
} from '../types/index';
import { AnyAction } from 'redux';

export function savedProperties(
  state: PropertyModel[],
  action: AnyAction
): PropertyModel[] {
  switch (action.type) {
    case 'ADD_TO_SAVED': {
      const _action = (<AddToSavedAction> action);
      
      // Check if ID is present already
      const isAddedAlready: boolean = !!state.find(property => property.id === _action.property.id);

      if (isAddedAlready) {
        alert('Added already. Duplicates are not allowed in "Saved properties"');
        return state;
      } else {
        return state.concat(_action.property);
      }
    }
    case 'REMOVE_FROM_SAVED': {
      const _state = state.slice(0); // copy array
      return _state.filter(property => property.id !== (<RemoveFromSavedAction> action).propertyId);
    }
    default:
      return state ? state : [];
  }
}
