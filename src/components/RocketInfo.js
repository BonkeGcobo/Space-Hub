import React from 'react';
import PropTypes from 'prop-types';

function RocketInfo({ rocket_name: name, rocket_image: rocketImage, description }) {
  return (
    <div className="rocket">
      <img src={rocketImage} alt="rocket" width="250" />
      <div className="aboutRocket">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-descrip">{description}</p>
        <button
          type="button"
          className="rocket-btn"
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

RocketInfo.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketInfo;
