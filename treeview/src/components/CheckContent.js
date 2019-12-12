import React, { Component } from "react";
import Checkbox from "./Checkbox";
import './CheckBox.css';

const OPTIONS = ["Crisis Related", "Outcome Prevention Ack", "Outcome Situational Awareness", "Outcome Relief Coordination",
"People Deaths", "People Wounded", "People Missing", "People Evacuated", "People Other", "Infraestructure Buildings",
"Infraestructure Roads", "Infraestructure Houses", "Infraestructure Business", "Infraestructure Other", "Request Information", 
"Request Goods", "Request Services", "Request Other", "Offer Information", "Offer Goods", "Offer Services", "Offer Other",
"Informative", "Update", "Precaution", "Emotional", "Expressive Positive", "Expressive Negative", "Complain", "Suggest Action",
"Promise", "Sarcasm", "Insult", "Yes-No Question", "Wh Question", "Open Question", "Yes Answer", "No Answer", "Response Ack",
"Response Other", "Opening Greeting", "Closing Greeting", "Thanks", "Apology", "Other Subcategory"];

export default class CheckContent extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={this.handleFormSubmit}>
            {this.createCheckboxes()}
          </form>
        </div>
      </div>
        <div className="form-group mt-2">
          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={this.selectAll}
          >
          Select All
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={this.deselectAll}
          >
          Deselect All
          </button>
          <button type="submit" className="btn btn-primary">
          Save
          </button>
        </div>
      </div>
    );
  }
}

