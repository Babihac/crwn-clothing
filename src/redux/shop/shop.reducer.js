import shopActionTypes from "./shop.types";

const INIT_STATE = {
  shop_data: null,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        shop_data: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
