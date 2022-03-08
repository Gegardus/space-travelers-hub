const ADD_MISSION = 'spacetravelers-hub/redux/missions/ADD_MISSION';
const missionApiURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const addMission = (missions) => ({
  type: ADD_MISSION,
  missions,
});

export const getMissionFromAPI = () => (async (dispatch) => {
  const response = await fetch(missionApiURL);
  const data = await response.json();
  const missionsArr = [];
  data.forEach((d) => {
    const mission = {
      id: d.mission_id,
      name: d.mission_name,
      description: d.description,
      join: false,
    };
    missionsArr.push(mission);
  });
  dispatch(addMission(missionsArr));
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, ...action.missions];
    default:
      return state;
  }
};

export default missionReducer;
