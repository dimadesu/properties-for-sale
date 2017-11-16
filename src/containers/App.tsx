import {
  StoreState, CustomAction,
} from '../types/index';

import { Results } from '../components/Results';
import './App.css';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch, ActionCreator } from 'react-redux';

// Actions
import { loadProperties } from '../actions/properties';

interface Props extends StoreState {
  dispatch: Dispatch<CustomAction>;
}

export class App extends React.Component<Props, {}> {
  componentDidMount() {
    bindActionCreators<ActionCreator<{}>>(loadProperties, this.props.dispatch)();
  }

  render() {
    return (
      <div className="app">
        <h1>Properties For Sale App</h1>
        <Results properties={this.props.properties} />
      </div>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    properties: state.properties,
  };
};

export default connect(
  mapStateToProps,
)(App);
