import {
  properties,
} from './properties';
import {
  savedProperties,
} from './saved-properties';
import {
  StoreState,
} from '../types/index';
import { AnyAction } from 'redux';

function rootReducer(
  state: StoreState,
  action: AnyAction
) {
  return {
    properties: properties(state.properties, action),
    savedProperties: savedProperties(state.savedProperties, action),
    grayListedProperties: savedProperties(state.grayListedProperties, action),
  };
}

export default rootReducer;
