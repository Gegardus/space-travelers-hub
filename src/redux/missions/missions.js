const ADD_MISSION = 'spacetravelers-hub/redux/missions/ADD_MISSION';
const RESERVE_MISSION = 'spacetravelers-hub/redux/dragons/RESERVE_MISSION';
const CANCEL_RESERVATION = 'spacetravelers-hub/redux/dragons/CANCEL_RESERVATION';
const missionApiURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const addMission = (missions) => ({
  type: ADD_MISSION,
  missions,
});

export const reserveMission = (missionId) => ({
  type: RESERVE_MISSION,
  missionId,
});

export const cancelMissionReservation = (missionId) => ({
  type: CANCEL_RESERVATION,
  missionId,
});

const bookMission = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
};

const cancelReservation = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

export const getMissionFromAPI = () => (async (dispatch) => {
  const response = await fetch(missionApiURL);
  const data = await response.json();
  const missionsArr = [];
  data.forEach((d) => {
    const mission = {
      mission_id: d.mission_id,
      mission_name: d.mission_name,
      description: d.description,
    };
    missionsArr.push(mission);
  });
  dispatch(addMission(missionsArr));
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, ...action.missions];
    case RESERVE_MISSION:
      return bookMission(state, action.missionId);
    case CANCEL_RESERVATION:
      return cancelReservation(state, action.missionId);
    default:
      return state;
  }
};

export default missionReducer;
