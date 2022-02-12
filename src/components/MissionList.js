import PropTypes from 'prop-types';
import ItemMission from './MissionInfo';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <table className="mission-table table-box">
      <thead className="mission-thead">
        <tr className="table-box white">
          <th className="table-box thwidth">Mission</th>
          <th className="table-box th-two">Description</th>
          <th className="table-box th-three">Status</th>
          <th className="table-box th-four" aria-label="Mute volume" />
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <ItemMission mission={mission} key={mission.id} />
        ))}
      </tbody>
    </table>
  );
};

MissionList.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
};

export default MissionList;
