import React from 'react';

const Mission = ((props) => {
  const data = props;
  return (
    <tr className="missions bg-white odd:bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-lime-100">
      <td className="mission-name px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 man-w-fit">{data.name}</td>
      <td className="mission-description text-sm text-gray-900 font-light px-6 py-4 w-1/2 max-h-36">{data.description}</td>
      <td className="mission-1 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-fit">
        {
            data.reserved === true
              ? (
                <span className="span-word bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
                dark:bg-blue-400 dark:text-white"
                >
                  Active Member
                </span>
              )
              : (
                <span className="span-word bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
                dark:bg-blue-400 dark:text-white"
                >
                  Not a member
                </span>
              )
        }
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap man-w-fit" id={data.idx}>

        {data.reserved === true
          ? (
            <button
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border
              border-gray-500 hover:border-transparent rounded"
              type="button"
              value="leave"
              onClick={data.toggleMission}
            >
              Leave Mission
            </button>
          )
          : (
            <button
              className="btn bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border
              border-gray-500 hover:border-transparent rounded"
              type="button"
              value="Join"
              onClick={data.toggleMission}
            >
              Join Mission
            </button>
          )}
      </td>
    </tr>
  );
});

export default Mission;
