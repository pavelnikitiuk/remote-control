import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ children, to, Icon }) => (
  <NavLink activeClassName="active" to={to}>
    <span className="navigation-link">
      <Icon className="navigation-link__icon" />
      <h1 className="navigation-link__text">{children}</h1>
    </span>
  </NavLink>
);

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  Icon: PropTypes.element,
};

NavigationLink.defaultProps = {
  Icon: null,
};

export default NavigationLink;
