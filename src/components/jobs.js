/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import jobActions from '../store/actions/jobs';

const Jobs = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobContent, setJobContent] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addJobs({ title: jobTitle, content: jobContent });
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
            <p>{job.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Content"
          value={JobContent}
          onChange={(e) => setJobContent(e.target.value)}
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
});

Jobs.propTypes = {
  fetchJobs: PropTypes.func,
  addJobs: PropTypes.func,
  jobs: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Jobs);
