'use strict';

// Resolution for requestAnimationFrame not supported in jest error :
// https://github.com/facebook/react/issues/9102#issuecomment-283873039
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');
