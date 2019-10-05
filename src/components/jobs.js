/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import jobActions from '../store/actions/jobs';

import Form from './update-form';

const Jobs = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDateApplied, setJobDateApplied] = useState('');
  
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addJobs({ title: jobTitle, location: jobLocation, dateApplied: jobDateApplied });
  }

  // Hanna - function to delete job
  function handleDelete(event) {
    event.preventDefault();
    props.deleteJob({id: event.target.value})
    props.fetchJobs();
  }
  
  function handleUpdate(event) {
    event.preventDefault();
    let jobId = event.target.value;
    console.log(jobId);
    if(true) {
      return (
        <Form id={jobId} />
      )
    }
  }
  
  
  useEffect(() => {
    props.fetchJobs();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <ul>
        {props.jobs.map((job, idx) => (
          <li key={idx}>
            <p>{job.title}</p>
            <p>{job.location}</p>
            <p>{job.dateApplied}</p>
            <button value={job._id} onClick={handleUpdate}>Update this Job</button>


            <button value={job._id} onClick={handleDelete}>Delete this Job</button>

          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h3>Add New Job!</h3>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Location"
          value={jobLocation}
          onChange={(e) => setJobLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date Applied to Job"
          value={jobDateApplied}
          onChange={(e) => setJobDateApplied(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => dispatch(jobActions.fetchJobs()),
  addJobs: (data) => dispatch(jobActions.addJobs(data)),
  deleteJob: (id) => dispatch(jobActions.deleteJob(id)),
});

Jobs.propTypes = {
  fetchJobs: PropTypes.func,
  addJobs: PropTypes.func,
  jobs: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
