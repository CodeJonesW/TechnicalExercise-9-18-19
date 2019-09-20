import React, { Component } from 'react';
import Person from './Person'
import { Table, Button } from "react-bootstrap"

class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [],
            visible: false
        }
    }

    findCharacterFrequency(people) {

        let listOfEmails = []
        let output = []
        let counter = {}

        people.map((person) => {
            if (person.email_address) {
                listOfEmails.push(person.email_address)
            }
        })

        listOfEmails.map((email) => {
            for (let x = 0; x < email.length; x++) {
                let character = email.charAt(x)
                counter[character] = (isNaN(counter[character]) ? 1 : counter[character] + 1)
            }
            output.push(counter)
        });

        let array = [];
        for (let char in counter) {
            array.push([char, counter[char]])
        }
        array.sort(function (a, b) {
            return a[1] - b[1]
        })
        this.setState({
            ...this.state,
            characterList: array,
            visible: !this.state.visible

        })
    }



    render() {

        let people = this.props.allPeople.data ? this.props.allPeople.data : null

        let list = this.state.characterList ? this.state.characterList.map(char => {
            return <tr><td> {char[0].toUpperCase()}</td> <td> {char[1]}</td></tr>
        }) : null

        return (
            <div>
                <div className="frequency">
                    {people ? <Button size="sm" className="button" onClick={() => this.findCharacterFrequency(people)}
                    >Find Email Character Frequency</Button> : null}
                </div>

                <div style={{ margin: "20px" }}>

                    <h3>List of People</h3>

                    {people ? people.map(obj => {
                        return <div id={obj.id}> <Person key={obj.id} info={obj} /> </div>
                    }) : null}
                </div>


                <div style={{ position: 'absolute', left: '600px', top: '140px' }}>

                    {this.state.visible ?
                        <Table bordered hover className="table">
                            <thead>
                                <th>
                                    Character
                                </th>

                                <th>
                                    Frequency
                                </th>

                            </thead>

                            <tbody>
                                {list}
                            </tbody>

                        </Table>
                        : null}
                </div>

            </div>

        )
    }

}

export default People;