import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //this is used to hoist the input value into the parent component
  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <div className="row">
        <form className="col s12 blue darken-3">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="How do you say"
                id="english-phrase"
                type="text"
                pattern="[a-zA-z ]+"
                className="validate white-text"
                value={value}
                onChange={this.handleChange}
              />
              <label className="active white-text" htmlFor="english-phrase">
                English Phrase to Translate
              </label>
              <button
                className="btn waves-effect waves-light indigo darken-3"
                type="button"
                onClick={this.props.onClick}
              >
                Submit
                <i className="material-icons right medium">compare_arrows</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
