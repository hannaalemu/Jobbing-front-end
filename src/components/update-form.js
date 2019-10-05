import React, { useState, useEffect } from 'react';


import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import jobActions from '../store/actions/jobs';

const Form = (props) => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobDateApplied, setJobDateApplied] = useState('');
  
    function handleSubmit (event)  {
        event.preventDefault();
        console.log(jobDateApplied);
        props.updateJob({ title: jobTitle, location: jobLocation, dateApplied: jobDateApplied });
    }

        return (
            <>
            <form onSubmit={handleSubmit}>
            <h3>Update this job</h3>
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
        )
    
}    
const mapDispatchToProps = (dispatch) => ({
    updateJob: (id, data) => dispatch(jobActions.updateJob(id, data)),
});


Form.propTypes = {
    fetchJobs: PropTypes.func,
    addJobs: PropTypes.func,
    jobs: PropTypes.array,
  };
export default connect(null, mapDispatchToProps)(Form);;
