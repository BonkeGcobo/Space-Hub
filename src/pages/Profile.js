import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const missions = useSelector((state) => state.missionsReducer);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);
  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <div>
        <h2>My missions</h2>
        {filteredMissions.map((mission) => (
          <div key={mission.mission_id} className="border p-5">
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div>

        <h2>My rockets</h2>
        {filteredRockets.map((rocket) => (
          <div key={rocket.id} className="border p-5">
            {rocket.rocket_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
