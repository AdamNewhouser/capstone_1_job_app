import React from 'react';
import ReactDOM from 'react-dom';
import EmployerListings from './EmployerListings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployerListings />, div);
  ReactDOM.unmountComponentAtNode(div);
});