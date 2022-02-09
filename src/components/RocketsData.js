import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import RocketInfo from './RocketInfo';

function RocketsData() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="my-5 px-5">
      {rockets.map((rocket) => (
        <RocketInfo
          rocket_name={rocket.rocket_name}
          rocket_type={rocket.rocket_type}
          rocket_image={rocket.flickr_images[0]}
          description={rocket.description}
          key={rocket.id}
        />
      ))}
    </div>
  );
}

export default RocketsData;
