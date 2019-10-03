export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      return action.payload;
    case 'ADD_JOBS':
      return [...state, action.payload];
    default:
      return state;
  }
};
