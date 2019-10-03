// Hanna - this file contains all the actions we need to get state from the store

const API = process.env.REACT_APP_API;

const get = (payload) => {
  return {
    type: 'FETCH_JOBS',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_JOBS',
    payload,
  };
};


const fetchJobs = () => (dispatch) => {
  return fetch(`${API}/api/v1/job`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addJobs = (job) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(job),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/job`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};


export default {
  fetchJobs,
  addJobs,
};
