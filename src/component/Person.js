import React from 'react';

function Person(props) {

    return (
        <div className="person" style={{ margin: "10px", borderStyle: "groove", padding: "10px", borderRadius: "5px", width: "400px" }}>
            <h4> Name: {props.info.display_name}</h4>
            <ul>
                <li>
                    <p>Email: {props.info.email_address}</p>
                </li>

                <li>
                    <p>Job Title: {props.info.title}</p>
                </li>
            </ul>
        </div>
    )
}

export default Person;