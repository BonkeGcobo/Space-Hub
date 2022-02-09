import { useDispatch } from 'react-redux';
import { memberStatusFunc, memberActivated } from '../redux/Missions/Missions';

const Mission = ((props) => {
  const dispatch = useDispatch();

  const onClick = ((e) => {
    const missionId = e.target.parentElement.id;
    if (e.target.value === 'Join') {
      const activeMember = true;
      dispatch(memberStatusFunc({ missionId, activeMember }));
    } else if (e.target.value === 'leave') {
      const notActive = false;
      dispatch(memberActivated({ missionId, notActive }));
    }
  });

  const data = props;
  return (
    <tr className="missions">
      <td className="mission-name">{data.name}</td>
      <td className="mission-description">{data.description}</td>
      <td className="mission-1">
        {
            data.memberActive === true
              ? (
                <span className="span-word member">Active Member</span>
              )
              : (
                <span className="span-word not-member">
                  Not a member
                </span>
              )
        }
      </td>
      <td>
        {data.memberActive === true
          ? (
            <button className="btn" type="button" value="leave" onClick={onClick}>
              Leave Mission
            </button>
          )
          : (
            <button className="btn" type="button" value="Join" onClick={onClick}>
              Join Mission
            </button>
          )}
      </td>
    </tr>
  );
});

export default Mission;
