import {
  StoreState,
  ContainerProps,
} from '../types/index';

import { Results } from '../components/Results';
import { SavedProperties } from '../components/SavedProperties';
import './App.css';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, ActionCreator } from 'react-redux';

// Actions
import { loadProperties } from '../actions/properties';

export class App extends React.Component<ContainerProps, {}> {
  componentDidMount() {
    bindActionCreators<ActionCreator<{}>>(loadProperties, this.props.dispatch)();
  }

  render() {
    return (
      <div className="app">
        <h1>Properties For Sale App</h1>
        <div className="cols">
          <div className="col">
            <Results properties={this.props.properties} />
          </div>
          <div className="col">
            <SavedProperties properties={this.props.savedProperties} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    properties: state.properties,
    savedProperties: state.savedProperties,
  };
};

export default connect(
  mapStateToProps,
)(App);
