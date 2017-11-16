import {
  PropertyModel,
  LoadingPropertiesSucceeded,
} from '../types/index';
import {
  LOADING_PROPERTIES_SUCCEEDED,
} from '../constants/properties';
import { AnyAction } from 'redux';

export function properties(
  state: PropertyModel[],
  action: AnyAction
): PropertyModel[] {
  switch (action.type) {
    case LOADING_PROPERTIES_SUCCEEDED:
      return state.concat((<LoadingPropertiesSucceeded> action).properties);
    default:
      return state ? state : [];
  }
}
