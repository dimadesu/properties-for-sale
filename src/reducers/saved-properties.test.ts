import {
  savedProperties,
} from './saved-properties';

describe('savedProperties reducer', () => {
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

  it('handles addition', () => {
    const nextState = savedProperties(
      [],
      {
        type: 'ADD_TO_SAVED',
        property,
      },
    );

    expect(nextState.length).toBe(1);
    expect(nextState).toEqual(
      [property]
    );

    // Disallow adding duplicates
    
    const nextState2 = savedProperties(
      nextState,
      {
        type: 'ADD_TO_SAVED',
        property,
      },
    );

    expect(nextState2.length).toBe(1);
    expect(nextState2).toEqual(
      [property]
    );
  });

  it('handles removal', () => {
    const nextState = savedProperties(
      [
        property,
        Object.assign({}, property, { id: '2', })
      ],
      {
        type: 'REMOVE_FROM_SAVED',
        propertyId: '2',
      },
    );

    expect(nextState.length).toBe(1);
    expect(nextState).toEqual(
      [property]
    );
  });

});
