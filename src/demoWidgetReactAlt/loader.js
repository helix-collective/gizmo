import {register, loadJS} from '../sdk.js';

const origin = window.location.origin;

const start = notifier => (options = {}) => {
  const {
    containerId = 'gizmo-demo-react-alt-widget',
    name = 'World',
    jsUrl = origin + '/dist/demo-react-alt.widget.js'
    // cssUrl = origin + '/dist/gizmo-demo-widget.css'
  } = options;

  const notify = notifier({name, containerId});

  loadJS(jsUrl, {success: notify});

  // const css = loadCSS(options.cssUrl);
  // onloadCSS(css, notify);
};

register({
  name: 'demoReactAlt',
  numDependencies: 1,
  start
});
