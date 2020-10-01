import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './components/Widget.js';

window.gizmo.widget.demoReact.render = ({name, containerId}) => {
  ReactDOM.render(<Widget name={name} />, document.getElementById(containerId));
};
