import {register, loadJS} from '../sdk.js';

const origin = window.location.origin;

const start = notifier => (options = {}) => {
  const {combined1 = {}, combined2 = {}, jsUrl = origin + '/dist/combined.widget.js'} = options;

  const combined1Options = Object.assign(
    {
      containerId: 'gizmo-combined-widget-1',
      name: 'Earth 1'
    },
    combined1
  );

  const combined2Options = Object.assign(
    {
      containerId: 'gizmo-combined-widget-2',
      name: 'Earth 2'
    },
    combined2
  );

  const notify = notifier({
    combined1: combined1Options,
    combined2: combined2Options
  });

  loadJS(jsUrl, {success: notify});
};

register({
  name: 'combined',
  numDependencies: 1,
  start
});
