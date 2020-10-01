import React, {PureComponent} from 'react';

import styles from './Widget.css';

class Widget extends PureComponent {
  render() {
    return (
      <div>
        Hello, <span className={styles.name}>{this.props.name}</span>!
      </div>
    );
  }
}

export default Widget;
