import {
  StoreState,
} from '../types/index';

import { Property } from '../components/Property';
import './App.css';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

// Actions
import { loadProperties } from '../actions/properties';

interface Props extends StoreState {
  dispatch: Dispatch<any>;
}

export class App extends React.Component<Props, any> {
  componentDidMount() {
    bindActionCreators<any>(loadProperties, this.props.dispatch)();
  }

  renderProperties() {
    return this.props.properties.map(property => (
      <Property {...property} key={property.id} />
    ));
  }

  render() {
    return (
      <div className="app">
        TODO: render results
        <div className="results">
          {this.renderProperties()}
        </div>
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
