import React from "react";
import "../styles/TableHeader.css";

export default function TableHeader(props) {
  return (
      
      <>
      <table className="p-5 text-center" id="table-header">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.handleSort}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    </table>
    </>
  );
}
