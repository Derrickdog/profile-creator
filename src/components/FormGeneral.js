import React, { Component } from 'react'

class FormGeneral extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber: '',
        //  description: '',
        //  firstNameDisplay: '',
        //  lastNameDisplay: '',
        //  emailDisplay: '',
        //  phoneNumberDisplay: '',
        //  descriptionDisplay: ''
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

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   const { firstName, lastName, email, phoneNumber, description } = this.state;
    //   this.setState({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phoneNumber: phoneNumber,
    //     description: description,
    //     firstNameDisplay: firstName,
    //     lastNameDisplay: lastName,
    //     emailDisplay: email,
    //     phoneNumberDisplay: phoneNumber,
    //     descriptionDisplay: description
    //   })
    // }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.state;
    return (
      <div>
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
          {/* <div>
              <label>Description</label>
              <textarea rows='3' cols='30' value={description} onChange={this.handleDescriptionChange} />
          </div> */}
          {/* <button type='submit'>Submit</button> */}
        </form>
        <div>
          {/* <h2>{this.state.firstNameDisplay}</h2>
          <h2>{this.state.lastNameDisplay}</h2>
          <h2>{this.state.emailDisplay}</h2>
          <h2>{this.state.phoneNumberDisplay}</h2>
          <h2>{this.state.descriptionDisplay}</h2> */}
          <h1>{firstName} {lastName}</h1>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          {/* <p>{description}</p> */}
        </div>
      </div>
    )
  }
}

export default FormGeneral