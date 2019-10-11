import React, { Component } from "react";

export class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleDisplay = {
      display : `${this.props.display}`
    };

    return (
      <div id="results" style={styleDisplay}>
        <table className="responsive-table centered">
          <thead>
            <tr className="blue lighten-4">
              <th className="col s6"><h6>English</h6></th>
              <th className="col s6"><h6>Dorbdorb</h6></th>
            </tr>
          </thead>
          <tbody>
            <tr className="blue lighten-4">
              <td>{this.props.english}</td>
              <td>{this.props.dorbdorb}</td>
            </tr>
          </tbody>
        </table>
        <table className="responsive-table centered">
          <thead>
            <tr className="blue darken-4 teal-text text-accent-2">
              <th colSpan="2"><h4>Gorbyoyo</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr className="blue darken-4 teal-text text-accent-2">
              <td colSpan="2"><h5>{this.props.gorbyoyo}</h5></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Results;
