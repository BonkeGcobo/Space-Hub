const MISSIONS_FETCHED = 'Missions/MISSIONS_FETCHED';
const MEMBER_STATUS = 'Missions/MISSIONS_FETCHED';
const MEMBER_ACTIVE = 'Missions/MISSIONS_FETCHED';

const initialState = {
  missions: [],
};

export const missionsFetched = (payload) => ({
  type: MISSIONS_FETCHED,
  payload,
});

export const memberStatusFunc = (payload) => ({
  type: MEMBER_STATUS,
  payload,
});

export const memberActivated = (payload) => ({
  type: MEMBER_ACTIVE,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_FETCHED:
      return { missions: [...action.payload] };
    case MEMBER_STATUS:
      return {
        missions:
        [...state.missions].map((mission) => (mission.mission_id === action.payload.missionId
          ? { ...mission, member: action.payload.activeMember }
          : mission)),
      };
    case MEMBER_ACTIVE:
      return {
        missions:
        [...state.missions].map((mission) => (mission.mission_id === action.payload.missionId
          ? { ...mission, member: action.payload.notActive }
          : mission)),
      };
    default:
      return state;
  }
};

export default reducer;
