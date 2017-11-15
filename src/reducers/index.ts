import { properties } from './properties';
import {
  StoreState,
  CustomAction,
} from '../types/index';

function rootReducer(
  state: StoreState,
  action: CustomAction
) {
  return {
    properties: properties(state.properties, action),
  };
}

export default rootReducer;
