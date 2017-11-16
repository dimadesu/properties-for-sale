import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { SavedProperties } from './SavedProperties';

describe('SavedProperties', () => {
  const property = {
    price: '$500,000',
    agency: {
      brandingColors: {
        primary: ''
      },
      logo: '',
    },
    id: '1',
    mainImage: '',
  };

  const properties = [
    property,
    Object.assign({}, property, {
      id: '2',
    }),
  ];
  
  it(
    'Does not crash',
    () => {
      const wrapper = shallow(
        <SavedProperties properties={properties} />
      );

      expect(
        wrapper.length
      ).toEqual(1);

      expect(
        wrapper.find('.saved_properties').length
      ).toEqual(1);
    }
  );

  it(
    `Given zero or more properties
    Then heading labeled "Saved Properties" is rendered`,
    () => {
      // Two properties

      const heading = shallow(
        <SavedProperties properties={properties} />
      ).find('.saved_properties__heading');

      expect(heading.length).toEqual(1);

      expect(heading.text()).toEqual('Saved Properties');

      // Zero properties case

      const heading2 = shallow(
        <SavedProperties properties={[]} />
      ).find('.saved_properties__heading');

      expect(heading2.length).toEqual(1);

      expect(heading2.text()).toEqual('Saved Properties');
    }
  );

  it(
    `Given data of two properties
    When passed to SavedProperties component
    Then two properties are rendered`,
    () => {
      const wrapper = mount(
        <SavedProperties properties={properties} />
      );

      expect(
        wrapper.find('.property').length
      ).toEqual(2);
    }
  );

  // TODO: this test case does not make sense in a way, since it is a runtime thing
  // it('"Saved Properties" will contain the initial property');

  it('Hovering over a property card in the "Saved Properties" column will display a "Remove" button');

  it('Clicking the "Remove" button will remove the property from the "Saved Properties"');

});
