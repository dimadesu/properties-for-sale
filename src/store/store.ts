import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(): Store<{}> {
  const _store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  );

  return _store;
}

export const store = configureStore();
