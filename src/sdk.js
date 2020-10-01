import loadJS from 'loadjs';
import loadCSS from './loadCSS';
import onloadCSS from './onloadCSS';

const capitalise = s => s[0].toUpperCase() + s.slice(1);

const readinessTracker = (numDependencies, name) => {
  const notifier = options => {
    let filesLoaded = 0;

    return () => {
      filesLoaded += 1;

      if (filesLoaded === numDependencies) {
        // reset files loaded value to allow multiple
        // instances to run for a single load of the widget
        filesLoaded = 0;
        gizmo.widget[name].render(options);
      }
    };
  };

  return notifier;
};

const register = ({name, numDependencies = 1, start}) => {
  const gizmo = window.gizmo || {};

  window.gizmo = gizmo;
  gizmo.widget = gizmo.widget || {};

  const asyncInitName = 'gizmo' + capitalise(name) + 'AsyncInit';
  const notifier = readinessTracker(numDependencies, name);

  if (gizmo.widget[name]) {
    throw Error('A widget with this name already exists: ' + name);
  }

  gizmo.widget[name] = {start: start(notifier)};

  if (typeof window[asyncInitName] === 'function') {
    window[asyncInitName]();
  }
};

export {loadJS, loadCSS, onloadCSS, register};
