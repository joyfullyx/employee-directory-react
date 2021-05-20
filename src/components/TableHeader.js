import React from "react";
import "../styles/TableHeader.css";

export default function TableHeader() {
  return (
    <table className="p-5 text-center" id="results-list">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    </table>
  );
}
