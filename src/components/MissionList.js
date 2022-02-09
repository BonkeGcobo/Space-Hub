import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionInfo from './MissionInfo';
import { getMissions } from '../redux/Missions/Missions';

const MissionList = (() => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (Object.values(missions).length > 0) {
      return missions;
    }
    dispatch(getMissions());
    return missions;
  }, [dispatch]);

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
        {missions.map((data) => (
          <MissionInfo
            key={data.missionId}
            name={data.missionName}
            description={data.description}
            memberActive={data.member}
            idx={data.missionId}
          />
        ))}
      </tbody>
    </table>
  );
});

export default MissionList;
