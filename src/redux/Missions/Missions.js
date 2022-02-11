const MISSIONS_FETCHED = 'Missions/MISSIONS_FETCHED';
const TOGGLE_MISSION = 'Missions/TOGGLE_MISSION';

const initialState = {
  missions: [],
};

export const missionsFetched = (payload) => ({
  type: MISSIONS_FETCHED,
  payload,
});

export const joinMission = (payload) => ({
  type: TOGGLE_MISSION,
  payload,
});

export const toggleMission = (state, payload) => {
  const newState = state.map((missions) => {
    if (missions.mission_id !== payload) return missions;
    return { ...missions, reserved: !missions.reserved };
  });
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_FETCHED:
      return { ...state, missions: action.payload };

    case TOGGLE_MISSION:
      return { missions: toggleMission(state.missions, action.payload) };

    default:
      return state;
  }
};

export default reducer;
