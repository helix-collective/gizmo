import React from 'react';
import ReactDOM from 'react-dom';

import Widget1 from '../demoWidgetReact/components/Widget.js';
import Widget2 from './components/Widget.js';

window.gizmo.widget.combined.render = ({combined1, combined2}) => {
  const combined1Container = document.getElementById(combined1.containerId);
  const combined2Container = document.getElementById(combined2.containerId);

  if (combined1Container) {
    ReactDOM.render(<Widget1 name={combined1.name} />, combined1Container);
  }

  if (combined2Container) {
    ReactDOM.render(<Widget2 name={combined2.name} />, combined2Container);
  }
};
