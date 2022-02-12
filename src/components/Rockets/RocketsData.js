import { useDispatch, useSelector } from 'react-redux';
import { rocketBooking } from '../../redux/rockets/rockets';
import RocketInfo from './RocketInfo';

function RocketsData() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const handleToggleClick = (id) => {
    dispatch(rocketBooking(id));
  };
  return (
    <div className="rocket-container">
      {rockets.map((rocket) => (
        <RocketInfo
          rocket_name={rocket.rocket_name}
          rocket_type={rocket.rocket_type}
          rocket_image={rocket.flickr_images[0]}
          description={rocket.description}
          key={rocket.id}
          id={rocket.id}
          handleToggleClick={handleToggleClick}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default RocketsData;
