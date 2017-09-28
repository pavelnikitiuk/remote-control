import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ header, children }) => (
  <section className="section">
    <div className="section__header">
      <h2>{header}</h2>
    </div>
    <div>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  header: PropTypes.string,
  children: PropTypes.element,
};

Section.defaultProps = {
  header: '',
  children: null,
};

export default Section;
