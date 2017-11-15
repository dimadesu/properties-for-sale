import * as React from 'react';
import {shallow} from 'enzyme';
import {Property} from './Property';

describe('Property', () => {
  const props = {
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

  it('Does not crash', () => {
    expect(shallow(
      <Property {...props} />
    ).length).toEqual(1);
  });
});
