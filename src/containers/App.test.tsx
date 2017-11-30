import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('App', () => {
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
  
  const props = {
    dispatch() {
      return {};
    },
    properties: [
      property,
    ],
    savedProperties: [
      property,
    ],
    grayListedProperties: [],
  };

  it('Does not crash', () => {
    expect(shallow(<App {...props} />).length).toBe(1);
  });
  
  it('There will be a second column with a heading "Saved Properties", along side the "Results" column', () => {
    const wrapper = mount(<App {...props} />);

    expect(wrapper.find('.results').length).toBe(1);
    expect(wrapper.find('.saved_properties').length).toBe(1);
  });

  describe('grayListedProperties', () => {
    
    it('On the inital load the grayListedProperties is empty array');
    it(`
      When property is mouse overed
      Then hide button displayed
    `);
    it(`
      Given I can see a hide button
      When I click hide button
      Then property moves to the gray list
    `);
    it(`
      Given I can see a hide button
      When I click hide button
      Then property moves to the gray list
    `);

  });
});
