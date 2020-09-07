import React from "react";

const defaultState = {
  name: "",
  birthdate: "",
  isClicked: true
}

class SignUpForm extends React.Component {
  state = defaultState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.birthdate.value);
    const userInfo= {name: event.target.name.value, 
                  birthdate: event.target.birthdate.value}
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo)
    })
      .then((r) => r.json())
      .then((newUser) => {
        this.props.onFormChange(newUser);
      })
      .then(this.setState(prevState => {
        return { isClicked: !prevState.isClicked }
      }
    ))
  };
  ///TODO KAREM FIX THIS SHIT ^^^^^^^

  render() {
    return (
      <>{this.state.isClicked ?
        <form onSubmit={this.handleSubmit}>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Sign-Up Form</legend>

            <input
              className="uk-input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input 
              type="date"
              name="birthdate"
              value={this.state.date}
              placeholder="Date of birth mm/dd/yyyy"
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="Submit" />
          </fieldset>
        </form> :
        ""}
      </>
    );
  }
}

export default SignUpForm;
