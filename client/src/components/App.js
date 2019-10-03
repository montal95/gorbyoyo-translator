import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toDorbdorb = this.toDorbdorb.bind(this);
    this.toGorbyoyo = this.toGorbyoyo.bind(this);
    this.state = {
      value: "",
      english: "",
      dorbdorb: [],
      gorbyoyo: [],
      concatGorbyoyo: ""
    };
  }

  handleChange(val) {
    //this converts the characters in the string to lower case
    this.setState({ value: val });
  }

  //this starts the translation process
  handleSubmit = async e => {
    //prevents empty form submit
    e.preventDefault();
    //resets input form to blank after click
    this.setState({
      english: `${this.state.value}`,
      value: ""
    });
    //translates input value into Dorbdorb
    await this.toDorbdorb(`${this.state.value}`);
    //translates input value into Gorbyoyo
    await this.toGorbyoyo(this.state.dorbdorb);
  };

  toDorbdorb = async str => {
    //sends string to translation API
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
      //converts response into JSON
      let responseJSON = await response.json();
      //puts dorbdorb translation into state
      return this.setState({
        dorbdorb: responseJSON
      });
    } catch (err) {
      console.log(err);
    }
  };

  //converts Dorbdorb array in state into Gorbyoyo characters
  toGorbyoyo = arr => {
    let newArr = [];
    let num1, num2, char;
    //loops through each key and assigns them to 3 temporary variables
    for (let i = 0; i < arr.length; i++) {
      let newChar = arr[i].split("");
      num1 = newChar[0] + newChar[1];
      char = newChar[3];
      num2 = newChar[5] + newChar[6];
      //creates the new Gorbyoyo character
      char = `${char}yo${parseInt(num1) + parseInt(num2)}`;
      //places new Gorbyoyo character into temporary array
      newArr = [...newArr, char];
    }
    newArr.join("");
    //places array into state
    this.setState({
      gorbyoyo: newArr
    });
  };

  gorbValidate = str => {};

  render() {
    const value = this.state.value;
    const english = this.state.english;
    const dorbdorb = this.state.dorbdorb;
    const gorbyoyo = this.state.gorbyoyo;

    return (
      <div className="container">
        <Header />
        <Form
          value={value}
          onClick={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Results english={english} dorbdorb={dorbdorb} gorbyoyo={gorbyoyo} />
      </div>
    );
  }
}
