export const devices = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_DEVICES':
        return [...action.devices];
      default:
        return state;
    }
  };