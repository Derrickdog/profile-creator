import React, { Component } from 'react'

class FormGeneral extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber: '',
         schoolName: '',
         degree: '',
         studies: '',
         gpa: '',
         graduationDate: ''
      }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
      this.setState({
          lastName: e.target.value
      })
    }

    handleEmailChange = (e) => {
      this.setState({
          email: e.target.value
      })
    }

    handlePhoneNumberChange = (e) => {
      this.setState({
          phoneNumber: e.target.value
      })
    }

    handleDescriptionChange = (e) => {
      this.setState({
          description: e.target.value
      })
    }

    handleSchool = (e) => {
      this.setState({
          schoolName: e.target.value
      })
    }

    handleDegree = (e) => {
      this.setState({
          degree: e.target.value
      })
    }

    handleStudies = (e) => {
      this.setState({
          studies: e.target.value
      })
    }

    handleGpa = (e) => {
      this.setState({
          gpa: e.target.value
      })
    }

    handleGraduation = (e) => {
      this.setState({
          graduationDate: e.target.value
      })
    }

  render() {
    const { firstName, lastName, email, phoneNumber, schoolName, degree, studies, gpa, graduationDate } = this.state;
    return (
      <div>
        <h2>Contact Information</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
              <label>First Name</label>
              <input type='text' value={firstName} onChange={this.handleFirstNameChange} />
          </div>
          <div>
              <label>Last Name</label>
              <input type='text' value={lastName} onChange={this.handleLastNameChange} />
          </div>
          <div>
              <label>Email</label>
              <input type='email' value={email} onChange={this.handleEmailChange} />
          </div>
          <div>
              <label>Phone Number</label>
              <input type='phone' value={phoneNumber} onChange={this.handlePhoneNumberChange} />
          </div>
          <h2>Education Information</h2>
          <div>
              <label>School Name</label>
              <input type='text' value={schoolName} onChange={this.handleSchool} />
          </div>
          <div>
              <label>Degree</label>
              <input type='text' value={degree} onChange={this.handleDegree} />
          </div>
          <div>
              <label>Studies</label>
              <input type='text' value={studies} onChange={this.handleStudies} />
          </div>
          <div>
              <label>Graduation</label>
              <input type='text' value={graduationDate} onChange={this.handleGraduation} />
          </div>
          <div>
              <label>GPA</label>
              <input type='number' value={gpa} onChange={this.handleGpa} />
          </div>
        </form>
        <div>
          <h1>{firstName} {lastName}</h1>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <h2>{schoolName}</h2>
          <p>{degree} {studies} {graduationDate}</p>
          <p>{gpa}</p>
        </div>
      </div>
    )
  }
}

export default FormGeneral