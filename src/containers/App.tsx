import {
  StoreState,
  ContainerProps,
  PropertyModel,
} from '../types/index';

import { Results } from '../components/Results';
import { SavedProperties } from '../components/SavedProperties';
import './App.css';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, ActionCreator } from 'react-redux';

// Actions
import { loadProperties } from '../actions/properties';
import {
  addToSaved,
  removeFromSaved
} from '../actions/saved-properties';
import {
  addToGraylisted, /*
  removeFromGraylisted */
} from '../actions/graylisted-properties';
import { Property } from '../components/Property';

export class App extends React.Component<ContainerProps, {}> {
  componentDidMount() {
    bindActionCreators<ActionCreator<{}>>(loadProperties, this.props.dispatch)();
  }
  
  renderProperties () {
    return this.props.properties.map(_property => (
      <Property
        property={_property}
        isAddButton={true}
        key={_property.id}
        addToSaved={(property: PropertyModel) => this.props.dispatch(addToSaved(property))}
        addToGrayListed={(property: PropertyModel) => this.props.dispatch(addToGraylisted(property))}
      />
    ));
  }

  renderSavedProperties () {
    return this.props.savedProperties.map(_property => (
      <Property
        property={_property}
        isAddButton={false}
        key={_property.id}
        removeFromSaved={(propertyId: string) => this.props.dispatch(removeFromSaved(propertyId))}
      />
    ));
  }
  
  render() {
    return (
      <div className="app">
        <h1>Properties For Sale App</h1>
        <div className="cols">
          <div className="col">
            <Results
              properties={this.renderProperties()}
            />
          </div>
          <div className="col">
            <SavedProperties
              properties={this.renderSavedProperties()}
            />
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
    grayListedProperties: state.grayListedProperties,
  };
};

export default connect(
  mapStateToProps,
)(App);
