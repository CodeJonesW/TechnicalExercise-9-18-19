import React, { Component } from 'react';
import Person from './Person'

class People extends Component {
    constructor() {
        super()
        this.state = {
            people: []
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
                let character = email.charAt(x);
                counter[character] = (isNaN(counter[character]) ? 1 : counter[character] + 1)
            }
            output.push(counter);
        });

        let array = [];
        for (var char in counter) {
            array.push([char, counter[char]]);
        }
        array.sort(function (a, b) {
            return a[1] - b[1];
        })
        this.setState({
            ...this.state,
            characterList: array
        })



        console.log(array)
    }



    render() {
        let people = this.props.allPeople.data ? this.props.allPeople.data : null
        let list = this.state.characterList ? this.state.characterList.map(char => {
            return <li>{char[0]}, {char[1]}</li>
        }) : null
        return (
            <div>
                <div style={{ margin: "20px" }}>

                    <h3>List of People</h3>

                    <div>
                        <button onClick={() => this.findCharacterFrequency(people)} style={{ position: 'absolute', left: '600px', top: '80px' }}>Find Email Character Frequency</button>
                    </div>

                    {people ? people.map(obj => {
                        return <div id={obj.id}> <Person key={obj.id} info={obj} /> </div>
                    }) : null}


                </div>

                <div style={{ position: 'absolute', left: '600px', top: '100px' }}>
                    <ul>
                        {list}
                    </ul>
                </div>

            </div>

        )
    }

}

export default People;