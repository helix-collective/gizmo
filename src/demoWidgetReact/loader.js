import {register, loadJS} from '../sdk.js';

const origin = window.location.origin;

const start = notifier => (options = {}) => {
  const {
    containerId = 'gizmo-demo-react-widget',
    name = 'World',
    jsUrl = origin + '/dist/demo-react.widget.js'
    // cssUrl = origin + '/dist/gizmo-demo-widget.css'
  } = options;

  const notify = notifier({name, containerId});

  loadJS(jsUrl, {success: notify});

  // const css = loadCSS(options.cssUrl);
  // onloadCSS(css, notify);
};

register({
  name: 'demoReact',
  numDependencies: 1,
  start
});
