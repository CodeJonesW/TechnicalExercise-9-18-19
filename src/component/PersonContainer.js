import React, { Component } from 'react';
import Person from './Person'

class People extends Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    findCharacterFrequency(people) {
        
        let listOfEmails = []
        let output =[]
        let counter = {}

        people.map((person) => {
            if (person.email_address) {
                listOfEmails.push(person.email_address)
            }
        })
        
        listOfEmails.map((email) => {
            
            for(let x = 0 ; x < email.length; x++) {
                let character = email.charAt(x);
                counter[character] = (isNaN(counter[character]) ? 1 : counter[character] + 1)
            }
            output.push(counter);
        });
        console.log(counter)
    }

    render() {
        let people = this.props.allPeople.data ? this.props.allPeople.data : null
        return (
            <div style={{margin: "20px"}}>
                
                <h3>List of People</h3>

                <div>
                    <button onClick={() => this.findCharacterFrequency(people)}>Find Character Frequency</button>
                </div>

                {people ? people.map(obj => {
                    return <div id={obj.id}> <Person key={obj.id} info={obj} /> </div>
                }) : null}

           
            </div>
            
        )
    }

}

export default People;