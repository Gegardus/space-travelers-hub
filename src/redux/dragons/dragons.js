const ADD_DRAGON = 'spacetravelers-hub/redux/dragons/ADD_DRAGON';
const dragonURL = 'https://api.spacexdata.com/v3/dragons';

const initialState = [];

export const addDragon = (dragons) => ({
  type: ADD_DRAGON,
  dragons,
});

export const getDragonsFromAPI = () => (async (dispatch) => {
  const response = await fetch(dragonURL);
  const data = await response.json();
  const dragonsArr = [];
  data.forEach((d) => {
    const dragon = {
      dragon_id: d.id,
      dragon_name: d.dragon_name,
      dragon_description: d.description,
      dragon_img: d.flickr_images[0],
    };
    dragonsArr.push(dragon);
  });
  dispatch(addDragon(dragonsArr));
});

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRAGON:
      return [...state, ...action.dragons];
    default:
      return state;
  }
};
export default dragonReducer;
