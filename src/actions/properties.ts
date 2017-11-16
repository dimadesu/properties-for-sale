import { AnyAction, Dispatch } from 'redux';
import {
  LOADING_PROPERTIES_SUCCEEDED,
} from '../constants/properties';
import { PropertyModel } from '../types/index';

export const loadingPropertiesSucceeded = (properties: PropertyModel[]) => ({
  type: LOADING_PROPERTIES_SUCCEEDED,
  properties,
});

export const loadProperties = () => (dispatch: Dispatch<AnyAction>) => {
  return fetch('/results.json')
    .then((response) => response.json())
    .then((json) => {
      const properties = json.results;

      dispatch(
        loadingPropertiesSucceeded(properties)
      );
    });
};
