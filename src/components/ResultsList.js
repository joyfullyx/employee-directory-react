import React from 'react'
import '../styles/ResultsList.css'

function ResultsList(props) {
    return (
        <table className="p-5 text-center"id="results-list">
            <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
            <tbody>
                {props.picture}
                {props.name}
                {props.phone}
                {props.email}
                {props.dob}
            </tbody>
        </table>
    )
}

export default ResultsList;