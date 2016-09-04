import React, { Component } from 'react';
import cn from 'classnames';

class Page extends Component {
  render() {
    const { isHidden, isDisabled, isActive, onClick, children, key, styles, className } = this.props;

    if (isHidden) return null;

    const activeClass = {
      [styles.disabled]: isDisabled,
      [styles.active]: isActive,
    };

    return (
      <button key={key} className={cn(activeClass, className)} onClick={onClick}>
        {children}
      </button>
   );
  }
}

export default Page;
