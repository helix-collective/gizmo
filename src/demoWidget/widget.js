import {h, render} from 'preact';

import Widget from './components/Widget.js';

window.gizmo.widget.demo.render = ({name, containerId}) => {
  render(<Widget name={name} />, document.getElementById(containerId));
};
