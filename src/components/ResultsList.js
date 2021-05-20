import React from "react";
import "../styles/ResultsList.css";

function ResultsList(props) {
  return (
    <table className="p-5 text-center" id="results-list">
      <tbody>
        <tr>
          <td>
            <img alt={props.last} src={props.picture}>
              {/* {props.picture} */}
            </img>
          </td>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsList;
