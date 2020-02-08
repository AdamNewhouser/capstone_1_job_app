import React from 'react';
import ReactDOM from 'react-dom';
import EditListingForm from './EditListingForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditListingForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});