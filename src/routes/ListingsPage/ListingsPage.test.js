import React from 'react';
import ReactDOM from 'react-dom';
import ListingsPage from './ListingsPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});