import React, { Component } from 'react'

class FormGeneral extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber: '',
         description: ''
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

    handleSubmit = (e) => {
      e.preventDefault();
      const { firstName, lastName, email, phoneNumber, description } = this.state;
      // alert(`${this.state.firstName}, ${this.state.lastName}, ${this.state.email}`);
      return (
        <div>
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
          <h2>{email}</h2>
          <h2>{phoneNumber}}</h2>
          <h2>{description}</h2>
        </div>
      )
    }

  render() {
    const { firstName, lastName, email, phoneNumber, description } = this.state;
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
          <div>
              <label>Description</label>
              <textarea rows='3' cols='30' value={description} onChange={this.handleDescriptionChange} />
          </div>
          <button type='submit'>Submit</button>
        </form>
        <div>
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
          <h2>{email}</h2>
          <h2>{phoneNumber}</h2>
          <h2>{description}</h2>
        </div>
      </div>
    )
  }
}

export default FormGeneral