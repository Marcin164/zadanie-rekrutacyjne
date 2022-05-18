import { FETCH_DEVICES_SUCCESS, FETCH_DEVICES_ERROR } from "../actions";

export const devices = (state = [], action) => {
    switch (action.type) {
      case FETCH_DEVICES_SUCCESS:
        return {...state, devices:action.devices};
      case FETCH_DEVICES_ERROR:
        return {error:action.error};
      default:
        return state;
    }
  };