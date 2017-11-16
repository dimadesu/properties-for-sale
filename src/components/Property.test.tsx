import * as React from 'react';
import { shallow } from 'enzyme';
import { Property } from './Property';

describe('Property', () => {
  const props = {
    property: {
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
    isAddButton: true,
  };

  it('Does not crash', () => {
    expect(shallow(
      <Property {...props} />
    ).length).toEqual(1);
  });

  it('Renders id', () => {
    const wrapper = shallow(
      <Property {...props} />
    );

    expect(wrapper.find('.property__id').length).toEqual(1);
  });

  it('Renders price', () => {
    const wrapper = shallow(
      <Property {...props} />
    );

    expect(wrapper.find('.property__price').length).toEqual(1);
  });

  it('Renders logo', () => {
    const wrapper = shallow(
      <Property {...props} />
    );

    expect(wrapper.find('.property__logo').length).toEqual(1);
  });

  it('Renders photo', () => {
    const wrapper = shallow(
      <Property {...props} />
    );

    expect(wrapper.find('.property__photo').length).toEqual(1);
  });

  it('Renders Add button when isAddButton false', () => {
    const wrapper = shallow(
      <Property {...props} />
    );

    expect(wrapper.find('.property__add-button').length).toEqual(1);
    expect(wrapper.find('.property__remove-button').length).toEqual(0);
  });

  it('Renders Remove button when isAddButton false', () => {
    const wrapper = shallow(
      <Property {...props} isAddButton={false} />
    );

    expect(wrapper.find('.property__add-button').length).toEqual(0);
    expect(wrapper.find('.property__remove-button').length).toEqual(1);
  });
});
