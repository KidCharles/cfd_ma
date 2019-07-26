import React, { Component } from "react";

import "./Form.css";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  render() {
    return (
      <div>
        <form>
          <p>Contact Information</p>
          <input type="text" className="" placeholder="First Name" />
          <input type="text" className="" placeholder="Last Name" />
          <p>Contact Information</p>
          Pick a Date and Time
          <div>
            <select>
              <option value="">Month</option>
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <select>
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
            <select>
              <option value="">Time</option>
              <option value="">8:00 - 9:00 AM</option>
              <option value="">9:00 AM - 12:00 PM</option>
              <option value="">12:00 PM - 1:00 PM</option>
              <option value="">1:00 PM - 5:00 PM</option>
              <option value="">5:00 PM - 6:00 PM</option>
              <option value="">6:00 PM - 8:00 pm</option>
            </select>
          </div>
          <button type="" className="">
            Give Me a Call
          </button>
        </form>
      </div>
    );
  }
}
