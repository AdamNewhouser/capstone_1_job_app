import React from 'react';
import ReactDOM from 'react-dom';
import ListingItem from './ListingItem';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});