import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContact from './ProfileContact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileContact />, div);
  ReactDOM.unmountComponentAtNode(div);
});