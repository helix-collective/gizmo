import loadJS from 'loadjs';
import loadCSS from './loadCSS';
import onloadCSS from './onloadCSS';

const capitalise = s => s[0].toUpperCase() + s.slice(1);

const readinessTracker = (numDependencies, gizmo, name) => {
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

const makeNamespace = (ns) => {
  //get the namespace string and split it
  let namespaceArr = ns.split(".");
  let parent = window;

  // loop through the array and create a nested namespace
  for (let i = 0; i < namespaceArr.length; i += 1) {

    let partName = namespaceArr[i];

    // check if the current parent already has the namespace declared
    // if it isn't, then create it
    if (typeof parent[partName] === 'undefined') {
      parent[partName] = {};
    }

    // get a reference to the deepest element in the hierarchy so far
    parent = parent[partName];
  }
  //  empty namespaces created and can be used.
  return parent;

};

/**
 * Register a widget that will be bound to the `window.gizmo` namespace.
 *
 * @param name the name of the widget
 * @param numDependencies the number of dependencies that are to be loaded
 * @param start the callback to call once the widget has loaded
 * @param asyncInit an optional callback that would be called when the widget is loaded
 * @param namespace an optional namespace to attache to the widget.

 *
 * A widget is loaded with the provided name, numDependencies, a start function, an optional namespace and an optional async init function name
 *
 * For instance the namespace 'a.b.c' would result in the creation of `window,a.b.c`.
 * The widget would be registered under `window.a.b.c.widget.{name}`
 *
 *
 */
const register = ({name, numDependencies = 1, start, asyncInit, namespace}) => {
  const gizmo = makeNamespace(namespace || 'gizmo');

  // window.gizmo = gizmo;
  gizmo.widget = gizmo.widget || {};

  const asyncInitName = asyncInit || 'gizmo' + capitalise(name) + 'AsyncInit';
  const notifier = readinessTracker(numDependencies, gizmo, name);

  if (gizmo.widget[name]) {
    throw Error('A widget with this name already exists: ' + name);
  }

  gizmo.widget[name] = {start: start(notifier)};

  if (typeof window[asyncInitName] === 'function') {
    window[asyncInitName]();
  }

};

export {loadJS, loadCSS, onloadCSS, register};
