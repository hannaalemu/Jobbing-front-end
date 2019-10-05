export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      return action.payload;
    case 'ADD_JOBS':
      return [...state, action.payload];
    case 'DELETE_JOB':
      return state.filter(job => job._id === action.payload.id ? false : true)
    case 'UPDATE_JOB':
        return state.map(job => job._id === action.payload.id ? {...state, ...action.payload} : job)
      default:
      return state;
  }
};
