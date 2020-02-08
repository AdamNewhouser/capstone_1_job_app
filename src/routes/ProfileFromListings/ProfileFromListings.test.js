import React from 'react';
import ReactDOM from 'react-dom';
import ProfileFromListings from './ProfileFromListings';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileFromListings />, div);
  ReactDOM.unmountComponentAtNode(div);
});