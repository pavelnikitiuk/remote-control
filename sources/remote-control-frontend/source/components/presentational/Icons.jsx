import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Icon extends PureComponent {
  render() {
    const { className, glyph, ...restProps } = this.props;

    return (
      <svg className={classnames('icon', className)} {...restProps}>
        <use xlinkHref={`#${glyph}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
};
