import React, { Component } from 'react';

import { Modal, ModalHeader, ModalBody,Input, FormGroup, Label, ModalFooter, Table, Button } from 'reactstrap';

import superagent from 'superagent';

class Job extends Component {

  state = {
    jobs : [],

    newJobData: {
      title: '',
      location: '',
      dateApplied: ''
    },

    editJobData: {
      _id: '',
      title: '',
      location: '',
      dateApplied: ''
    },

    newJobModal: false,
    editJobModal: false

  }

  componentDidMount() {

    this._refreshJobs();
    
  }

  _refreshJobs() {

    superagent.get('https://jobbing-back-end.herokuapp.com/api/v1/job')
      .then((response => {
        console.log(response);
        this.setState({
          jobs: response.body
        })

    }))
  }

  toggleNewJobModal() {
    this.setState({
      newJobModal : !this.state.newJobModal
  })
  }

  toggleEditJobModal() {
    this.setState({
      editJobModal : !this.state.editJobModal
  })
  }

  handleChangeTitle = (event) =>  {
    let { newJobData } = this.state;
    newJobData.title = event.target.value;

    this.setState({ newJobData });
  }

  handleChangeLocation = (event) =>  {
    let { newJobData } = this.state;
    newJobData.location = event.target.value;

    this.setState({ newJobData });
  }

  handleChangeDateApplied = (event) =>  {
    let { newJobData } = this.state;
    newJobData.dateApplied = event.target.value;

    this.setState({ newJobData });
  }

  addNewJob = (event) => {
    superagent.post('https://jobbing-back-end.herokuapp.com/api/v1/job', this.state.newJobData) 
      .then((response) => {
        
        // Hanna = After we add a new Job,  we want to reset the state to include the new job, close the modal, and reset new Job Data to empty so the user can add another job, and they won't see the old job data in the modal
        let { jobs } = this.state;

        jobs.push( response.body )

        this.setState({ jobs, newJobModal: false, newJobData: {
          title: '',
          location: '',
          dateApplied: ''

         }});

      })
 
  }

  // Hanna this method binds the respective job's information to the modal when the edit button is clicked and pops up the new edit job modal
  editJob = (_id, title, location, dateApplied) => {
    
    this.setState({
    
      editJobData: {_id, title, location, dateApplied } , editJobModal: !this.state.editJobModal

    });
  }


  updateJob = () => {
    let { title, location, dateApplied } = this.state.editJobData;

    superagent.put('https://jobbing-back-end.herokuapp.com/api/v1/job/' + this.state.editJobData._id, {
      
      title, location, dateApplied 
    })
      .then((response) => {
        
        this._refreshJobs();

      });

      this.setState ({

      editJobModal: false, editJobData: {
        id: '',
        title: '',
        location: '',
        dateApplied: ''

      },
    });
  }

  handleDelete = (_id) => {
    superagent.delete('https://jobbing-back-end.herokuapp.com/api/v1/job/' + _id, {
     
    })
      .then((response) => {
        
        this._refreshJobs();

      });
  }


  render() {

    let jobs = this.state.jobs.map((job) => {

      return (
        <tr key={job._id}>

              <td>{job._id}</td>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.dateApplied}</td>

              <td>

                <Button color="success" size="sm" onClick={ this.editJob.bind(this, job._id, job.title, job.location, job.dateApplied ) }>Edit</Button>

                <Button color="danger" size="sm" onClick={ this.handleDelete.bind(this, job._id) }>Delete</Button>

              </td>
            </tr>
      )

    })
    return (
      <div className='Job container'>

        <Button color="primary" onClick={this.toggleNewJobModal.bind(this)}>Add new Job</Button>

        <Modal isOpen={this.state.newJobModal} toggle={this.toggleNewJobModal.bind(this)}>

          <ModalHeader toggle={this.toggleNewJobModal.bind(this)}>Add a new Job</ModalHeader>

          <ModalBody>

            <FormGroup>

              <Label for="title">Title</Label>
              <Input id="title" value={this.state.newJobData.title}  onChange={this.handleChangeTitle} placeholder="Ex. Software Developer"></Input>

            </FormGroup>

            <FormGroup>
              
              <Label for="location">Location</Label>
              <Input id="location" value={this.state.newJobData.location} onChange={ this.handleChangeLocation } placeholder="Ex. Seattle" ></Input>

            </FormGroup>

            <FormGroup>
              
              <Label for="dateApplied">Date Applied</Label>
              <Input id="dateApplied" value={this.state.newJobData.dateApplied} onChange={this.handleChangeDateApplied } placeholder="Ex. October 2, 2019" ></Input>

            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.addNewJob.bind(this)}>Add Job</Button>
            <Button color="secondary" onClick={this.toggleNewJobModal.bind(this)}>Cancel</Button>

          </ModalFooter>
        </Modal>




      <Modal isOpen={this.state.editJobModal} toggle={this.toggleEditJobModal.bind(this)}>

      <ModalHeader toggle={this.toggleEditJobModal.bind(this)}>Edit Job</ModalHeader>

      <ModalBody>

        <FormGroup>

          <Label for="title">Title</Label>
          <Input id="title" value={this.state.editJobData.title}  onChange={(event) =>  {
              let { editJobData } = this.state;
              editJobData.title = event.target.value;

              this.setState({ editJobData });

            }} />

        </FormGroup>

        <FormGroup>
          
          <Label for="location">Location</Label>
          <Input id="location" value={this.state.editJobData.location} onChange={(event) =>  {
              let { editJobData } = this.state;
              editJobData.location = event.target.value;

              this.setState({ editJobData });

            }} />  

        </FormGroup>

        <FormGroup>
          
          <Label for="dateApplied">Date Applied</Label>
          <Input id="dateApplied" value={this.state.editJobData.dateApplied} onChange={(event) =>  {
              let { editJobData } = this.state;
              editJobData.dateApplied = event.target.value;

              this.setState({ editJobData });

            }} />

        </FormGroup>

      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={this.updateJob.bind(this)}>Update Job</Button>
        <Button color="secondary" onClick={this.toggleEditJobModal.bind(this)}>Cancel</Button>

      </ModalFooter>

      </Modal>

        <Table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Date Applied</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs}
          </tbody>

        </Table>

      </div>
      
    )
  }
}


export default Job;

