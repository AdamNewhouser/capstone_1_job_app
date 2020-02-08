import React from 'react';
import ReactDOM from 'react-dom';
import NewListingPage from './NewListingPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewListingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});