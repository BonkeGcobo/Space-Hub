import axios from 'axios';

const initialState = [];

export const missionsFetched = (payload) => ({
  type: 'MISSIONS_FETCHED',
  payload,
});

export const memberJoin = (payload) => ({
  type: 'MEMBER_JOIN',
  payload,
});

export const memberJoinConfirmation = (id) => (dispatch) => {
  dispatch(memberJoin(id));
};

export const memberLeave = (payload) => ({
  type: 'MEMBER_LEAVE',
  payload,
});

export const memberLeaveConfirmation = (id) => (dispatch) => {
  dispatch(memberLeave(id));
};

export const getMissions = () => async (dispatch) => {
  const missions = await axios.get('https://api.spacexdata.com/v3/missions');
  /* eslint-disable camelcase */
  const mappedMissions = Object.entries(missions.data).map(([id, mission]) => {
    const { mission_name, description } = mission;
    return { id, mission_name, description };
  });
  dispatch(missionsFetched(mappedMissions));
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MISSIONS_FETCHED':
      return action.payload;
    case 'MEMBER_JOIN':
      return state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: true };
      });
    case 'MEMBER_LEAVE':
      return state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionReducer;
