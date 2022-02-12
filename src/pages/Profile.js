import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const missions = useSelector((state) => state.missionsReducer);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);
  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="block-prof">
      <div className="rock-table margin">
        <h2>My missions</h2>
        <table className="tablex table-box tbody">
          <tbody>
            {filteredMissions.map((mission) => (
              <tr key={mission.mission_id} className="border p-5">
                <td className="roc-mis">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rock-table">
        <h2>My rockets</h2>
        <table className="tablex table-box tbody">
          <tbody>
            {filteredRockets.map((rocket) => (
              <tr key={rocket.id} className="border p-5">
                <td className="roc-mis">{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
