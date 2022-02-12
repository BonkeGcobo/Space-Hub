import PropTypes from 'prop-types';
import ItemMission from './MissionInfo';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <table className="min-w-full table-auto">
      <thead className="bg-white border-b">
        <tr>
          <th className="tabel-list text-sm font-medium text-gray-900 px-6 py-4 text-left">Mission</th>
          <th className="table-list text-sm font-medium text-gray-900 px-6 py-4 text-left">Description</th>
          <th className="table-list text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
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
