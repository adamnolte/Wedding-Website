import React from 'react';
import PropTypes from 'prop-types';

import './WeddingParty.css';

const Person = ({ imgSrc, name, title }) => {
  return (
    <div className={'person'}>
      <div>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={'person-description'}>
        <div>{name}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}

Person.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Person;
