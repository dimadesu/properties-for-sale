import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Results } from './Results';

describe('Results', () => {
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
        <Results properties={properties} />
      );

      expect(
        wrapper.length
      ).toEqual(1);

      expect(
        wrapper.find('.results').length
      ).toEqual(1);
    }
  );

  it(
    `Given zero or more properties
    Then heading labeled "Results" is rendered`,
    () => {
      // Two properties

      const heading = shallow(
        <Results properties={properties} />
      ).find('.results__heading');

      expect(heading.length).toEqual(1);

      expect(heading.text()).toEqual('Results');

      // Zero properties case

      const heading2 = shallow(
        <Results properties={[]} />
      ).find('.results__heading');

      expect(heading2.length).toEqual(1);

      expect(heading2.text()).toEqual('Results');
    }
  );

  it(
    `Given data of two properties
    When passed to results component
    Then two properties are rendered`,
    () => {
      const wrapper = mount(
        <Results properties={properties} />
      );

      expect(
        wrapper.find('.property').length
      ).toEqual(2);
    }
  );
});
