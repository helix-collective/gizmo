import React, {PureComponent} from 'react';

import styles from './Widget.css';

class Widget extends PureComponent {
  render() {
    return (
      <div>
        Hello, <span className={styles.name}>{this.props.name}</span>! (Not the same widget.)
      </div>
    );
  }
}

export default Widget;
