import React, { Component } from 'react'

class FormGeneral extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: 'John',
         lastName: 'Smith',
         email: 'johnsmith@gmail.com',
         phoneNumber: '123-456-7890',
         schoolName: 'Binghamton University',
         degree: 'BS',
         studies: 'Computer Science',
         gpa: '3.9',
         graduationDate: 'May 2020'
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

    handleReset = () => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        degree: '',
        studies: '',
        gpa: '',
        graduationDate: ''
      })
    }

  render() {
    const { firstName, lastName, email, phoneNumber, schoolName, degree, studies, gpa, graduationDate } = this.state;
    return (
      <div>
        <h2>Contact Information</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
              <label>First Name</label><br />
              <input type='text' value={firstName} onChange={this.handleFirstNameChange} />
          </div>
          <div>
              <label>Last Name</label><br />
              <input type='text' value={lastName} onChange={this.handleLastNameChange} />
          </div>
          <div>
              <label>Email</label><br />
              <input type='email' value={email} onChange={this.handleEmailChange} />
          </div>
          <div>
              <label>Phone Number</label><br />
              <input type='phone' value={phoneNumber} onChange={this.handlePhoneNumberChange} />
          </div>
          <h2>Education Information</h2>
          <div>
              <label>School Name</label><br />
              <input type='text' value={schoolName} onChange={this.handleSchool} />
          </div>
          <div>
              <label>Degree</label><br />
              <input type='text' value={degree} onChange={this.handleDegree} />
          </div>
          <div>
              <label>Studies</label><br />
              <input type='text' value={studies} onChange={this.handleStudies} />
          </div>
          <div>
              <label>Graduation</label><br />
              <input type='text' value={graduationDate} onChange={this.handleGraduation} />
          </div>
          <div>
              <label>GPA</label><br />
              <input type='number' value={gpa} onChange={this.handleGpa} />
          </div>
          <button type='reset' onClick={this.handleReset}>Reset</button>
        </form>
        <div>
          <h1>{firstName} {lastName}</h1>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <h2>{schoolName}</h2>
          <p>{degree} {studies}</p>
          <p>{graduationDate}</p>
        </div>
      </div>
    )
  }
}

export default FormGeneral