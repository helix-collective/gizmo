import React from 'react';
import ReactDOM from 'react-dom';

import Widget from '../demoWidgetReact/components/Widget';

window.gizmo.widget.demoReactAlt.render = ({name, containerId}) => {
  ReactDOM.render(<Widget name={name} />, document.getElementById(containerId));
};
