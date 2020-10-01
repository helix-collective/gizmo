import {h, Component} from 'preact';

import styles from './Widget.css';

class Widget extends Component {
  render() {
    return (
      <div>
        Hello, <span className={styles.name}>{this.props.name}</span>!
      </div>
    );
  }
}

export default Widget;
