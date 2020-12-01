import {h, render} from 'preact';

import Widget from './components/Widget.js';

window.ns.demo.widget.demoNamespaced.render = ({name, containerId}) => {
  render(<Widget name={name} />, document.getElementById(containerId));
};
