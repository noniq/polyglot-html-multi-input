import ReactDOM from 'react-dom';
import React from 'react';

import MultiLineInput from './components/MultiLineInput';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-multi-input]').forEach((element) => {
    const value = element.value;
    const name = element.getAttribute('name');
    const componentWrapper = document.createElement('div');
    element.parentNode.replaceChild(componentWrapper, element);
    ReactDOM.render(<MultiLineInput originalValue={value} originalName={name} />, componentWrapper)
  });
});
