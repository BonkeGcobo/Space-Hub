import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { memberJoinConfirmation, memberLeaveConfirmation } from '../redux/Missions/Missions';

/* eslint-disable camelcase */
const ItemMission = (props) => {
  const {
    mission: {
      id,
      mission_name,
      description,
      reserved,
    },
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (reserved === true) {
      dispatch(memberLeaveConfirmation({ id }));
    } else {
      dispatch(memberJoinConfirmation({ id }));
    }
  };

  return (
    <tr className="table-box bax bg-white odd:bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-lime-100">
      <td className="table-box flex px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 man-w-fit">
        {mission_name}
      </td>
      <td className="table-box pad text-sm text-gray-900 font-light px-6 py-4 w-1/2 max-h-36">
        {description}
      </td>
      <td className="table-box spec text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-fit">
        {reserved === true
          ? (
            <span className="but-inactive but-active span-word bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-400 dark:text-white">
              Active Member
            </span>
          )
          : (
            <span className="but-inactive span-word bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5    rounded dark:bg-blue-400 dark:text-white">
              Not a member
            </span>
          )}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap man-w-fit">
        {reserved === true ? (
          <button
            className="but-join but-leave bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            type="button"
            key={id}
            onClick={handleClick}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="but-join btn bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            type="button"
            key={id}
            onClick={handleClick}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

ItemMission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default ItemMission;
