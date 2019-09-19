import React, { Component } from 'react';

class Person extends Component {

    render() {
        return (
            <div id="person" style={{margin: "10px", borderStyle: "groove", padding: "10px", borderRadius: "5px"}}>
                <h4>Name: {this.props.info.display_name}</h4>
                    <ul>
                        <li>
                            <p>Email: {this.props.info.email_address}</p>
                        </li>

                        <li>
                            <p>Job Title: {this.props.info.title}</p>
                        </li>
                    </ul>
            </div>
        )
    }

}

export default Person;