const ADD_ROCKET = 'spacetravelers-hub/redux/rockets/ADD_ROCKET';
const RESERVE_ROCKET = 'spacetravelers-hub/redux/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spacetravelers-hub/redux/rockets/CANCEL_RESERVATION';
const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  rocketId,
});

export const cancelRocketReservation = (rocketId) => ({
  type: CANCEL_RESERVATION,
  rocketId,
});

const rocketBooking = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.rocket_id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: true };
  });
  return newState;
};

const cancelReservation = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.rocket_id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: false };
  });
  return newState;
};

export const getRocketsFromAPI = () => (async (dispatch) => {
  const response = await fetch(rocketURL);
  const data = await response.json();
  const rocketsArr = [];
  data.forEach((d) => {
    const rocket = {
      rocket_id: d.id,
      rocket_name: d.rocket_name,
      rocket_description: d.description,
      rocket_img: d.flickr_images[0],
    };
    rocketsArr.push(rocket);
  });
  dispatch(addRocket(rocketsArr));
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, ...action.rockets];
    case RESERVE_ROCKET:
      return rocketBooking(state, action.rocketId);
    case CANCEL_RESERVATION:
      return cancelReservation(state, action.rocketId);
    default:
      return state;
  }
};
export default rocketReducer;
