import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

const props = {
  dispatch() {}, // tslint:disable-line:no-empty
  properties: [
    {
      price: '$500,000',
      agency: {
        brandingColors: {
          primary: ''
        },
        logo: '',
      },
      id: '1',
      mainImage: '',
    },
  ],
};

describe('App', () => {
  it('Does not crash', () => {
    expect(shallow(<App {...props} />).length).toBe(1);
  });
  
  it('There will be a second column with a heading "Saved Properties", along side the "Results" column', () => {
    const wrapper = mount(<App {...props} />);

    expect(wrapper.find('.results').length).toBe(1);
    expect(wrapper.find('.saved_properties').length).toBe(1);
  });

  it('Clicking the "Add" button will create the property in the "Saved Properties"');
});
