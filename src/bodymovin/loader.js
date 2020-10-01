import {register, loadJS} from '../sdk.js';

let promise;

const start = notifier => (options = {}) => {
  if (promise) {
    return promise;
  }

  promise = new Promise(resolve => {
    const {
      jsUrl = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.2/lottie.min.js'
    } = options;

    const notify = notifier({resolve});

    loadJS(jsUrl, {success: notify});
  });

  return promise;
};

register({
  name: 'bodymovin',
  numDependencies: 1,
  start
});

window.gizmo.widget.bodymovin.render = ({resolve}) => resolve(window.bodymovin);
