import * as actionTypes from "../actions/actionTypes";
// import isEmpty from "../validation/is-empty";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case actionTypes.PROFILE_NOT_FOUND:
      return {
        ...state
      };
    case actionTypes.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null

      };
    case actionTypes.GET_PROFILES:
      return {
        ...state
      };
    default:
      return state;
  }
};

// export const GET_PROFILE = "GET_PROFILE";
// export const PROFILE_LOADING = "PROFILE_LOADING";
// export const PROFILE_NOT_FOUND = "PROFILE_NOT_FOUND";
// export const CLEAR_CURRENT_PROFILE = "CLEAR_CURRENT_PROFILE";
// export const GET_PROFILES = "GET_PROFILES";
