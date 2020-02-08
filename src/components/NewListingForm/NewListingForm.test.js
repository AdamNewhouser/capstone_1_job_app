import React from 'react';
import ReactDOM from 'react-dom';
import NewListingForm from './NewListingForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewListingForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});