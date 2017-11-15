import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it(
  `Display the list of properties
  using the dataset within the "Results" array
  running down the page in a column
  that has a heading labeled "Results"`
);

it('There will be a second column with a heading "Saved Properties", along side the "Results" column');
it('"Saved Properties" will contain the initial property');

it('Hovering over a property card in the "Results" column will display an "Add" button');
it('Clicking the "Add" button will create the property in the "Saved Properties"');

it('Hovering over a property card in the "Saved Properties" column will display a "Remove" button');
it('Clicking the "Remove" button will remove the property from the "Saved Properties"');
