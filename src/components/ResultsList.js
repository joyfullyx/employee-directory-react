import React from "react";
import "../styles/ResultsList.css";
// use Moment to reformat date in 'dob' from UTC to something more legible and human 
import Moment from "react-moment";

function ResultsList(props) {
  return (
    <table className="p-4 text-center" id="results-list">
      <tbody>
        <tr>
          <td>
            <img alt={props.last} src={props.picture} key={props.id}>
            </img>
          </td>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.id}</td>
          <td>
            <Moment className="text-center" format="MM/DD/YYYY">
              {props.dob}
            </Moment>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsList;
