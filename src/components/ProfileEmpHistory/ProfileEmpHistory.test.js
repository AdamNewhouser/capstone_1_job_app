import React from 'react';
import ReactDOM from 'react-dom';
import ProfileEmpHistory from './ProfileEmpHistory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileEmpHistory />, div);
  ReactDOM.unmountComponentAtNode(div);
});