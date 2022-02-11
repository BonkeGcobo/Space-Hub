import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <div>
      <div>
        <h2>My missions</h2>
        {missions.filter((mission) => mission.member === true).map((mission) => <div key={mission.mission_id} className="border-2 mr-12 p-4">{mission.mission_name}</div>)}
      </div>
      <div>
        <h2>My rockets</h2>
        {rockets.filter((rocket) => rocket.reserved).map((rocket) => <div key={rocket.id} className="border-2 mr-12 p-4">{rocket.rocket_name}</div>)}
      </div>
    </div>
  );
};

export default Profile;
