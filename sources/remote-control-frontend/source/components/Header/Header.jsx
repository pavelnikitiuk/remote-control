import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: document.title,
};

export default Header;
