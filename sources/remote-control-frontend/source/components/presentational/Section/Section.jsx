import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ header, children }) => (
  <section className="section">
    <div className="section__header-container">
      <h2 className="section__header">{header}</h2>
    </div>
    <div className="section__content">{children}</div>
  </section>
);

Section.propTypes = {
  header: PropTypes.string,
  children: PropTypes.array,
};

Section.defaultProps = {
  header: '',
  children: [],
};

export default Section;
