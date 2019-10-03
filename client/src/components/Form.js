import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      dorbdorb: [],
      gorbyoyo: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //this converts the characters in the string to lower case
    this.setState({ value: e.target.value.toLowerCase() });
    console.log(this.state.value);
  }

  handleSubmit = async e => {
    this.toDorbdorb(`${this.state.value}`);
    this.toGorbyoyo();
    e.preventDefault();
  };

  toDorbdorb = async str => {
    console.log("hit dorbdorb");
    try {
      let response = await fetch(
        "https://72exx40653.execute-api.us-east-1.amazonaws.com/prod/translateEnglishToAlien",
        {
          method: "POST",
          body: JSON.stringify({
            textToTranslate: `${this.state.value}`
          })
        }
      );
      let responseJSON = await response.json();
      console.log(responseJSON);
      return this.setState({
        dorbdorb: responseJSON
      });
    } catch (err) {
      console.log(err);
    }
  };

  toGorbyoyo = () => {
    this.state.dorbdorb.forEach(key => {
      let num1, num2, newKey;
      key.split("").forEach(char => {
        if (typeof char === "string") {
          return (newKey = char);
        }
        if (!newKey) {
          return (num1 = char);
        }
        return (num2 = char);
      });
      key = `${newKey}yo${num1+num2}`
    });
  };

  render() {
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
                value={this.state.value}
                onChange={this.handleChange}
              />
              <label className="active white-text" htmlFor="english-phrase">
                English Phrase to Translate
              </label>
              <button
                className="btn waves-effect waves-light indigo darken-3"
                type="button"
                onClick={this.handleSubmit}
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
