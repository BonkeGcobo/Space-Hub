import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

function RocketInfo({
  id,
  rocket_name: name,
  rocket_image: rocketImage,
  description,
  reserved,
  handleToggleClick,
}) {
  return (
    <div className="rocket">
      <img src={rocketImage} alt="rocket" width="250" />
      <div className="aboutRocket">
        <h2 className="rocket-name">{name}</h2>
        <p className="reserve-sect">
          {reserved && (
            <span className="rev-word">
              Reserved
            </span>
          )}
          {' '}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            className="py-2 px-5 rounded text-red-500 border border-red-400"
            onClick={() => handleToggleClick(id)}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            type="button"
            className="rocket-btn "
            onClick={() => handleToggleClick(id)}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

RocketInfo.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketInfo;
