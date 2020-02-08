import React from 'react';
import ReactDOM from 'react-dom';
import ProfileEducation from './ProfileEducation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileEducation />, div);
  ReactDOM.unmountComponentAtNode(div);
});