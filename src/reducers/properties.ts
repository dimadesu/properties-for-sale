import {
  PropertyModel,
  CustomAction,
} from '../types/index';
import {
  LOADING_PROPERTIES_SUCCEEDED,
} from '../constants/properties';

export function properties(state: PropertyModel[], action: CustomAction): PropertyModel[] {
  switch (action.type) {
    case LOADING_PROPERTIES_SUCCEEDED:
      return state.concat(action.properties);
    default:
      return state ? state : [];
  }
}
