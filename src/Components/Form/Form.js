import React, { Component } from "react";

import "./Form.css";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    time: "",
    nameError: "",
    lastNameError: "",
    monthError: "",
    dayError: "",
    timeError: "",
    formValid: false
  };

  formUpdater = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let lastNameError = "";
    let monthError = "";
    let dayError = "";
    let timeError = "";

    if (this.state.firstName.length < 2) {
      nameError = "Must be a Valid First Name";
    }
    if (this.state.lastName.length < 2) {
      lastNameError = "Must be a Valid Last Name";
    }
    if (this.state.month === "") {
      monthError = "Please choose a Month";
    }
    if (this.state.day === "") {
      dayError = "Please choose a Day";
    }
    if (this.state.time === "") {
      timeError = "Please choose a Time";
    }

    if (nameError || lastNameError || monthError || dayError || timeError) {
      this.setState({
        nameError,
        lastNameError,
        monthError,
        dayError,
        timeError
      });
      return false;
    }
    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        firstName: "",
        lastName: "",
        nameError: "",
        lastNameError: "",
        monthError: "",
        dayError: "",
        timeError: "",
        formValid: !this.state.formValid
      });
    }
    this.props.onSubmit(this.state);
  };

  render() {
    let buttonClass = "activeButton";
    if (this.state.firstName === "") {
      buttonClass = "inactiveButton";
    }
    return (
      <div className="formWrapper">
        <form>
          <p className="formTitle">
            Get the Medicare benefits that fit your needs
          </p>
          <p className="subTitle">Contact Information</p>
          <input
            name="firstName"
            type="text"
            required
            maxLength="25"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={e => this.formUpdater(e)}
          />
          <div className="error">{this.state.nameError}</div>
          <input
            name="lastName"
            type="text"
            required
            maxLength="25"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={e => this.formUpdater(e)}
          />
          <div className="error">{this.state.lastNameError}</div>

          <p className="subTitle">Pick a Date and Time</p>
          <div className="dateTime">
            <div className="dateTimeContainer">
              <select
                name="month"
                value={this.state.month}
                onChange={e => this.formUpdater(e)}
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <div className="error">{this.state.monthError}</div>
            </div>

            <div className="dateTimeContainer">
              <select
                name="day"
                value={this.state.day}
                onChange={e => this.formUpdater(e)}
              >
                <option value="">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <div className="error">{this.state.dayError}</div>
            </div>

            <div className="dateTimeContainer">
              <select
                name="time"
                value={this.state.time}
                onChange={e => this.formUpdater(e)}
              >
                <option value="">Time</option>
                <option value="8">8:00 - 9:00 AM</option>
                <option value="9">9:00 AM - 12:00 PM</option>
                <option value="12">12:00 PM - 1:00 PM</option>
                <option value="1">1:00 PM - 5:00 PM</option>
                <option value="5">5:00 PM - 6:00 PM</option>
                <option value="6">6:00 PM - 8:00 pm</option>
              </select>
              <div className="error">{this.state.timeError}</div>
            </div>
          </div>
          <button className={buttonClass} onClick={e => this.onSubmit(e)}>
            Have a Licensed Agent call me
          </button>
        </form>
      </div>
    );
  }
}
