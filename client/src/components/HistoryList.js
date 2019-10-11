import React from "react";

export default function HistoryList({children}) {
  return (
    <div className="row" id="historyList">
      <table className="col s12 responsive-table centered">
        <thead>
            <tr className="blue darken-2">
                <th colSpan="3"><h6>Translation History</h6></th>
            </tr>
            <tr className="blue lighten-4 centered">
                <th><h6>English</h6></th>
                <th><h6>Dorbdorb</h6></th>
                <th><h6>Gorbyoyo</h6></th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
      </table>
    </div>
  );
}
