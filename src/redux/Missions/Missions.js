/* eslint-disable camelcase */
import axios from 'axios';

const MISSIONS_FETCHED = 'Missions/MISSIONS_FETCHED';
const MEMBER_STATUS = 'Missions/MISSIONS_FETCHED';
const MEMBER_ACTIVE = 'Missions/MISSIONS_FETCHED';
const BaseUrl = 'https://api.spacexdata.com/v3/missions';

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

export const getMissions = () => async (dispatch) => {
  axios.get(BaseUrl)
    .then((response) => {
      const newMission = response.data;
      const mappedMissions = Object.entries(newMission).map(([mission_id, mission]) => {
        const { mission_name, description } = mission;
        return { mission_id, mission_name, description };
      });
      dispatch(missionsFetched(mappedMissions));
    });
};

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
