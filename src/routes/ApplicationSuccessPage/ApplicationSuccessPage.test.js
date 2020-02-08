import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationSuccessPage from './ApplicationSuccessPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationSuccessPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});